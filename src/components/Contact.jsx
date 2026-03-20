import { useState } from 'react';
import SectionContainer from './SectionContainer';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <SectionContainer id="contact" className="py-24">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-[#c084fc] drop-shadow-sm">Get In Touch</h2>
      </div>

      <div className="flex flex-col md:flex-col lg:flex-row justify-between gap-16 max-w-6xl mx-auto items-start">
        
        {/* Left Side: Info */}
        <motion.div 
          className="w-full lg:w-5/12 flex flex-col gap-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I'm open to full-time roles, internships, and interesting projects. Feel free to reach out!
          </p>

          <div className="flex gap-4">
            <a href="https://github.com/mayank-bhardwaj12" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-200 dark:bg-[#1e1e24] hover:bg-slate-300 dark:hover:bg-[#2d2d36] rounded-xl text-slate-700 dark:text-slate-300 hover:text-[#c084fc] dark:hover:text-[#c084fc] border border-transparent dark:border-white/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/mayank-bhardwaj12/" className="p-3 bg-slate-200 dark:bg-[#1e1e24] hover:bg-slate-300 dark:hover:bg-[#2d2d36] rounded-xl text-slate-700 dark:text-slate-300 hover:text-[#c084fc] dark:hover:text-[#c084fc] border border-transparent dark:border-white/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a href="mailto:bhardwajmayank058@gmail.com" className="p-3 bg-slate-200 dark:bg-[#1e1e24] hover:bg-slate-300 dark:hover:bg-[#2d2d36] rounded-xl text-slate-700 dark:text-slate-300 hover:text-[#c084fc] dark:hover:text-[#c084fc] border border-transparent dark:border-white/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col gap-5 text-sm md:text-base mt-4">
            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
              <FaEnvelope className="w-5 h-5 text-[#8b5cf6]" />
              <a href="mailto:bhardwajmayank058@gmail.com" className="hover:text-[#c084fc] transition-colors font-medium">bhardwajmayank058@gmail.com</a>
            </div>
            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
              <FaPhoneAlt className="w-5 h-5 text-[#8b5cf6]" />
              <span className="font-medium">+91-8307142623</span>
            </div>
            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
              <FaMapMarkerAlt className="w-5 h-5 text-[#8b5cf6]" />
              <span className="font-medium">Punjab, India</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          className="w-full lg:w-7/12 bg-white/60 dark:bg-[#15151A]/60 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-xl dark:shadow-2xl border border-slate-200 dark:border-[#8b5cf6]/30 relative overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Subtle glow effect on dark mode */}
          <div className="hidden dark:block absolute top-0 right-0 w-64 h-64 bg-[#8b5cf6]/10 rounded-full blur-3xl -z-0 transform translate-x-1/2 -translate-y-1/2"></div>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-400">Name</label>
              <input 
                type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                className="px-4 py-3 rounded-lg bg-white/50 dark:bg-[#1e1e24]/50 backdrop-blur-md border border-slate-200 dark:border-white/5 focus:outline-none focus:border-[#8b5cf6]/80 focus:ring-1 focus:ring-[#8b5cf6]/80 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 transition-all font-medium"
                placeholder="Your name" 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-400">Email</label>
              <input 
                type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                className="px-4 py-3 rounded-lg bg-white/50 dark:bg-[#1e1e24]/50 backdrop-blur-md border border-slate-200 dark:border-white/5 focus:outline-none focus:border-[#8b5cf6]/80 focus:ring-1 focus:ring-[#8b5cf6]/80 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 transition-all font-medium"
                placeholder="your@email.com" 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-400">Message</label>
              <textarea 
                id="message" name="message" value={formData.message} onChange={handleChange} required rows="4"
                className="px-4 py-3 rounded-lg bg-white/50 dark:bg-[#1e1e24]/50 backdrop-blur-md border border-slate-200 dark:border-white/5 focus:outline-none focus:border-[#8b5cf6]/80 focus:ring-1 focus:ring-[#8b5cf6]/80 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 transition-all resize-none font-medium"
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`flex items-center justify-center gap-2 w-full py-4 mt-2 rounded-xl font-bold text-white transition-all duration-300 ${
                isSubmitting ? 'bg-[#8b5cf6]/70 cursor-not-allowed' : 'bg-[#8b5cf6] hover:bg-[#7c3aed] shadow-lg shadow-[#8b5cf6]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#8b5cf6]/40'
              }`}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <FaPaperPlane className="w-4 h-4" /> Send Message
                </>
              )}
            </button>

            {success && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 p-3 bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg text-center font-semibold border border-green-500/20 text-sm"
              >
                Message Sent Successfully!
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
