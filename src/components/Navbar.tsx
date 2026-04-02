import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../supabaseClient';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  openAuth: (mode: 'login' | 'signup') => void;
  user: any;
}

const ADMIN_EMAIL = "parthdandekar07@gmail.com"; // 👈 CHANGE THIS

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, openAuth, user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Past Cases', path: '/cases' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  // 🔐 Admin check
  const isAdmin = user?.email === ADMIN_EMAIL;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-serif font-bold">S</span>
            </div>
            <div>
              <div className="font-serif text-2xl font-semibold tracking-tight">Sterling Law</div>
              <div className="text-[10px] text-gray-500 dark:text-gray-400 -mt-1">EST. 1978</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors relative ${isActive(link.path) 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400" 
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {user ? (
              <>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {user.email}
                </span>

                {/* ✅ ADMIN BUTTON */}
                {isAdmin && (
                  <Link 
                    to="/admin"
                    className="px-5 py-2.5 text-sm font-medium bg-green-600 hover:bg-green-700 text-white rounded-full"
                  >
                    Admin
                  </Link>
                )}

                <button 
                  onClick={handleLogout}
                  className="px-5 py-2.5 text-sm font-medium bg-red-600 hover:bg-red-700 text-white rounded-full"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => openAuth('login')}
                  className="px-5 py-2.5 text-sm font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                >
                  Login
                </button>
                <button 
                  onClick={() => openAuth('signup')}
                  className="px-5 py-2.5 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden py-6 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-medium ${isActive(link.path) 
                    ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex flex-col gap-3 px-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                {user ? (
                  <>
                    {isAdmin && (
                      <Link 
                        to="/admin"
                        className="w-full py-3 text-sm font-medium bg-green-600 text-white rounded-full text-center"
                      >
                        Admin
                      </Link>
                    )}
                    <button 
                      onClick={handleLogout}
                      className="w-full py-3 text-sm font-medium bg-red-600 text-white rounded-full"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => { openAuth('login'); setIsMenuOpen(false); }}
                      className="w-full py-3 text-sm font-medium border border-gray-300 dark:border-gray-700 rounded-full"
                    >
                      Login
                    </button>
                    <button 
                      onClick={() => { openAuth('signup'); setIsMenuOpen(false); }}
                      className="w-full py-3 text-sm font-medium bg-blue-600 text-white rounded-full"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
