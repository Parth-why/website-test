import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, EyeOff } from 'lucide-react';
import { supabase } from '../supabaseClient';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'signup';
  setMode: (mode: 'login' | 'signup') => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode, setMode }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // ✅ FIXED handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // ✅ Validation
    if (mode === 'signup' && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match ❌');
      setIsLoading(false);
      return;
    }

    try {
      if (mode === 'signup') {

        // ✅ SIGNUP
        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
        });

        if (error) {
          setError(error.message);
        } else {
          // ✅ INSERT PROFILE
          if (data?.user) {
            await supabase.from('profiles').insert({
              id: data.user.id,
              name: formData.name,
              city: formData.city
            });
          }
          setSuccess(true);
        }

      } else {

        // ✅ LOGIN
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (error) {
          setError(error.message);
        } else {
          setSuccess(true);
        }
      }
    } catch (err) {
      setError('Something went wrong ❌');
    }

    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-gray-200 dark:border-gray-700"
          >

            {/* Header */}
            <div className="flex justify-between items-center px-8 pt-8 pb-6 border-b border-gray-100 dark:border-gray-800">
              <div>
                <div className="font-serif text-3xl font-semibold">Welcome</div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">To Sterling Law</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                <X size={22} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-100 dark:border-gray-800 px-8">
              <button 
                onClick={() => setMode('login')} 
                className={`flex-1 py-4 ${mode === 'login' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
              >
                Login
              </button>
              <button 
                onClick={() => setMode('signup')} 
                className={`flex-1 py-4 ${mode === 'signup' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                {success ? (
                  <div className="text-center py-10">
                    <h3 className="text-xl font-semibold">Success!</h3>
                    <p>{mode === 'login' ? 'Logged in successfully' : 'Account created successfully'}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">

                    {/* SIGNUP FIELDS */}
                    {mode === 'signup' && (
                      <>
                        <input
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800"
                        />

                        <input
                          name="city"
                          placeholder="City"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800"
                        />
                      </>
                    )}

                    {/* EMAIL */}
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800"
                    />

                    {/* PASSWORD */}
                    <div className="relative">
                      <input
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>

                    {/* CONFIRM PASSWORD */}
                    {mode === 'signup' && (
                      <input
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800"
                      />
                    )}

                    {/* ERROR */}
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    {/* BUTTON */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
                    >
                      {isLoading ? 'Loading...' : mode === 'login' ? 'Login' : 'Sign Up'}
                    </button>

                  </form>
                )}
              </AnimatePresence>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
