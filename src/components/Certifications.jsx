import { motion } from 'framer-motion';
import { FaCheckCircle, FaEye, FaDownload } from 'react-icons/fa';

import dsaCert from '../assets/Data Structures and Algorithms Certificate.pdf';
import privacyCert from '../assets/privacy and security.pdf';
import promptCert from '../assets/prompt engineering.pdf';
import networkCert from '../assets/bits & bytes.pdf';

const certificationsData = [
  { name: 'Data Structures and Algorithms', issuer: 'LPU', certLink: dsaCert },
  { name: 'Privacy and Security in Online Social Media', issuer: 'NPTEL', certLink: privacyCert },
  { name: 'ChatGPT-4 Prompt Engineering', issuer: 'Infosys', certLink: promptCert },
  { name: 'The Bits and Bytes of Computer Networking', issuer: 'Google', certLink: networkCert }
];

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="w-full py-8 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 pt-16 lg:pt-8 lg:pl-12 mt-8 lg:mt-0">
      <div className="text-center lg:text-left mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Licenses & <span className="text-[#c084fc] drop-shadow-sm">Certifications</span>
        </h2>
        <div className="w-16 h-1 bg-[#c084fc] mx-auto lg:mx-0 rounded-full"></div>
      </div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {certificationsData.map((cert) => (
          <motion.div
            key={cert.name}
            variants={itemVariants}
            className="flex flex-col items-center justify-between text-center gap-2 p-4 sm:p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-slate-200 dark:border-slate-800 group hover:border-[#c084fc] hover:-translate-y-2 hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#c084fc]/30 transition-all duration-500 aspect-square"
          >
            <div className="flex flex-col items-center justify-center gap-2 h-full">
              <div className="shrink-0 text-[#c084fc] drop-shadow-sm p-3 bg-[#c084fc]/10 rounded-full mb-1">
                <FaCheckCircle className="w-6 h-6" />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 group-hover:text-[#c084fc] transition-colors drop-shadow-sm mb-1 line-clamp-2 leading-snug">
                  {cert.name}
                </h4>
                <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                  {cert.issuer}
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col xl:flex-row items-center justify-center gap-2 pt-4 mt-auto border-t border-slate-100 dark:border-slate-800/60">
              <a 
                href={cert.certLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full xl:w-auto flex-1 items-center justify-center gap-1.5 px-2 py-1.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#c084fc] dark:hover:text-[#c084fc] bg-slate-100 dark:bg-slate-800/80 hover:bg-[#c084fc]/10 rounded-lg transition-colors border border-transparent shadow-sm whitespace-nowrap"
              >
                <FaEye /> View
              </a>
              <a 
                href={cert.certLink}
                download={`${cert.name} Certificate.pdf`}
                className="flex w-full xl:w-auto flex-1 items-center justify-center gap-1.5 px-2 py-1.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#c084fc] dark:hover:text-[#c084fc] bg-slate-100 dark:bg-slate-800/80 hover:bg-[#c084fc]/10 rounded-lg transition-colors border border-transparent shadow-sm whitespace-nowrap"
              >
                <FaDownload /> Save
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;
