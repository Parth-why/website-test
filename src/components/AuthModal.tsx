import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, EyeOff } from 'lucide-react';

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
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      
      setTimeout(() => {
        setSuccess(false);
        onClose();
        // Reset form
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        // Show success notification
        alert(mode === 'login' ? 'Successfully logged in!' : 'Account created successfully!');
      }, 1500);
    }, 1200);
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
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-100 dark:border-gray-800 px-8">
              <button 
                onClick={() => setMode('login')}
                className={`flex-1 py-4 text-sm font-medium transition-all ${mode === 'login' 
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                  : 'text-gray-500 dark:text-gray-400'}`}
              >
                Login
              </button>
              <button 
                onClick={() => setMode('signup')}
                className={`flex-1 py-4 text-sm font-medium transition-all ${mode === 'signup' 
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                  : 'text-gray-500 dark:text-gray-400'}`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                      <div className="text-green-600 dark:text-green-400 text-4xl">✓</div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Success!</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {mode === 'login' ? 'You are now signed in.' : 'Your account has been created.'}
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {mode === 'signup' && (
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500 placeholder:text-gray-400" 
                          placeholder="Johnathan Sterling" 
                          required 
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500 placeholder:text-gray-400" 
                        placeholder="you@company.com" 
                        required 
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Password</label>
                      <div className="relative">
                        <input 
                          type={showPassword ? 'text' : 'password'} 
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500 placeholder:text-gray-400" 
                          placeholder="••••••••" 
                          required 
                        />
                        <button 
                          type="button" 
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    {mode === 'signup' && (
                      <div>
                        <label className="block text-sm font-medium mb-2">Confirm Password</label>
                        <input 
                          type={showPassword ? 'text' : 'password'} 
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500 placeholder:text-gray-400" 
                          placeholder="••••••••" 
                          required 
                        />
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-medium transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        mode === 'login' ? 'Sign In' : 'Create Account'
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-500 dark:text-gray-400 pt-2">
                      By continuing, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </motion.form>
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