import { motion } from 'framer-motion';

const SectionContainer = ({ children, id, className = "" }) => {
  return (
    <motion.section
      id={id}
      className={`min-h-screen py-20 flex flex-col justify-center items-center px-4 md:px-12 lg:px-24 w-full ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-6xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionContainer;
