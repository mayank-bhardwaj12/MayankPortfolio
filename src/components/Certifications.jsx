import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const certificationsData = [
  { name: 'Data Structures and Algorithms', issuer: 'LPU' },
  { name: 'Privacy and Security in Online Social Media', issuer: 'NPTEL' },
  { name: 'ChatGPT-4 Prompt Engineering', issuer: 'Infosys' },
  { name: 'The Bits and Bytes of Computer Networking', issuer: 'Google' }
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
        className="flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {certificationsData.map((cert) => (
          <motion.div
            key={cert.name}
            variants={itemVariants}
            className="flex items-center gap-4 p-5 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 group hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
          >
            <div className="shrink-0 text-[#c084fc] drop-shadow-sm">
              <FaCheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-[#c084fc] transition-colors drop-shadow-sm">
                {cert.name}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {cert.issuer}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;
