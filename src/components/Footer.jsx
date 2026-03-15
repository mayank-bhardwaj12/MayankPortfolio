import { FaGithub, FaEnvelope, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md border-t border-white/20 dark:border-slate-800/50 text-center text-slate-600 dark:text-slate-400 relative z-10 w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="font-medium">
          &copy; {new Date().getFullYear()} Mayank. All rights reserved.
        </p>
        
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="https://github.com/mayank-bhardwaj12" target="_blank" rel="noopener noreferrer" className="hover:text-[#c084fc] hover:drop-shadow-sm transition-colors">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="mailto:bhardwajmayank058@gmail.com" className="hover:text-[#c084fc] hover:drop-shadow-sm transition-colors">
            <FaEnvelope className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/mayank-bhardwaj12/" className="hover:text-[#c084fc] hover:drop-shadow-sm transition-colors">
            <FaLinkedinIn className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
