import { useState, useEffect } from 'react';
import SectionContainer from './SectionContainer';
import Typewriter from './Typewriter';
import CustomLottie from './CustomLottie';
import { motion } from 'framer-motion';
import { FaGithub, FaFileAlt, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const [lottieData, setLottieData] = useState(null);

  useEffect(() => {
    fetch('https://assets5.lottiefiles.com/packages/lf20_w51pcehl.json')
      .then((res) => res.json())
      .then((data) => setLottieData(data))
      .catch((err) => console.error("Error loading Lottie animation", err));
  }, []);

  return (
    <SectionContainer id="home" className="pt-32 pb-20">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl font-medium text-[#c084fc] drop-shadow-sm mb-2"
          >
            Hello there, I'm
          </motion.h2>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white"
          >
            Mayank
          </motion.h1>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-semibold text-slate-700 dark:text-slate-300 mb-6 h-12"
          >
            <Typewriter
              textArray={[
                'MERN Stack Developer',
                'DSA Enthusiast',
                'Problem Solver',
              ]}
              speed={100}
              pause={2000}
            />
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md"
          >
            Full Stack Developer specializing in building scalable web applications and solving complex problems.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a href="#projects" className="px-6 py-3 bg-[#c084fc] hover:bg-[#a855f7] text-white rounded-full font-medium transition-colors shadow-lg shadow-[#c084fc]/30 flex items-center gap-2">
              View Projects <FaArrowDown />
            </a>
            <a href="https://github.com/mayank-bhardwaj12" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-full font-medium transition-colors flex items-center gap-2">
              <FaGithub /> GitHub
            </a>
            <a href="/Mayank_CV.pdf" download="Mayank_CV.pdf" className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-[#c084fc] hover:text-[#c084fc] dark:hover:border-[#c084fc] dark:hover:text-[#c084fc] rounded-full font-medium transition-colors flex items-center gap-2">
              <FaFileAlt /> Download CV
            </a>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-lg"
          >
            {lottieData ? (
              <CustomLottie animationData={lottieData} loop={true} />
            ) : (
              <div className="w-full h-80 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
