import { useState, useEffect } from 'react';
import SectionContainer from './SectionContainer';
import CustomLottie from './CustomLottie';
import { motion } from 'framer-motion';
import Training from './Training';
import Certifications from './Certifications';

const About = () => {
  const [lottieData, setLottieData] = useState(null);

  useEffect(() => {
    fetch('https://assets2.lottiefiles.com/packages/lf20_kyu7xb1v.json')
      .then((res) => res.json())
      .then((data) => setLottieData(data))
      .catch((err) => console.error("Error loading Lottie animation", err));
  }, []);

  return (
    <SectionContainer id="about" className="bg-white/30 dark:bg-slate-900/40 backdrop-blur-md border-y border-white/20 dark:border-slate-800/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Who <span className="text-[#c084fc] drop-shadow-sm">I Am</span></h2>
        <div className="w-20 h-1 bg-[#c084fc] mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Lottie Animation */}
        <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >
            {lottieData ? (
              <CustomLottie animationData={lottieData} loop={true} />
            ) : (
              <div className="w-full h-80 flex items-center justify-center">
                <div className="animate-pulse bg-slate-200 dark:bg-slate-700 w-full h-full rounded-2xl"></div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert"
          >
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
              Hi, I'm Mayank, a Computer Science student at Lovely Professional University with a strong interest in full-stack development and problem solving using data structures and algorithms.
            </p>
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              I enjoy building scalable web applications and continuously improving my coding skills through projects and competitive programming. I am passionate about learning new technologies and leveraging them to create meaningful, efficient solutions.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full mt-24">
        <Training />
      </div>

      <div className="w-full">
        <Certifications />
      </div>
    </SectionContainer>
  );
};

export default About;
