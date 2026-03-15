import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Who I Am', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Academic', href: '#academic' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-12 flex justify-between items-center h-20">
        
        {/* Logo */}
        <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="text-xl font-bold tracking-tighter group inline-flex items-center transition-transform hover:scale-105">
          <span className="text-[#c084fc] drop-shadow-sm group-hover:-translate-x-1 transition-transform duration-300">&lt;</span>
          <span className="mx-1">Mayank</span>
          <span className="text-[#c084fc] drop-shadow-sm group-hover:translate-x-1 transition-transform duration-300">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="relative group py-1 hover:text-[#c084fc] hover:drop-shadow-sm transition-colors"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c084fc] transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 hover:scale-110 transition-all duration-300 active:scale-95 group"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun className="w-5 h-5 text-yellow-400 group-hover:rotate-90 transition-transform duration-500" /> : <FaMoon className="w-5 h-5 text-slate-700 group-hover:-rotate-12 transition-transform duration-300" />}
          </button>
        </nav>

        {/* Mobile Toggle & Theme button */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 hover:scale-110 transition-all duration-300 active:scale-95 group"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun className="w-5 h-5 text-yellow-400 group-hover:rotate-90 transition-transform duration-500" /> : <FaMoon className="w-5 h-5 text-slate-700 group-hover:-rotate-12 transition-transform duration-300" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -mr-2 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full hover:scale-110 transition-all duration-300 active:scale-95 group"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FaTimes className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" /> : <FaBars className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
          >
            <nav className="flex flex-col py-4 px-4 gap-4 pb-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="font-medium hover:text-[#c084fc] hover:drop-shadow-sm hover:bg-purple-50/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-300 block py-3 px-4 transform hover:translate-x-2"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
