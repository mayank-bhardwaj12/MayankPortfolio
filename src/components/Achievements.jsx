import { motion } from 'framer-motion';
import { FaTrophy, FaFire } from 'react-icons/fa';

const achievementsData = [
  {
    icon: <FaTrophy className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />,
    title: '200+ DSA Problems Solved',
    description: 'Actively solving algorithmic challenges on LeetCode and GeeksforGeeks to improve problem-solving skills.'
  },
  {
    icon: <FaFire className="w-8 h-8 text-orange-500 dark:text-orange-400 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500" />,
    title: '100-Day LeetCode Streak',
    description: 'Maintained consistent coding habits and continuous learning through daily problem-solving.'
  }
];

const Achievements = () => {
  return (
    <div className="w-full py-8 lg:pr-12">
      <div className="text-center lg:text-left mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">My <span className="text-[#c084fc] drop-shadow-sm">Achievements</span></h2>
        <div className="w-16 h-1 bg-[#c084fc] mx-auto lg:mx-0 rounded-full"></div>
      </div>

      <div className="flex flex-col gap-6">
        {achievementsData.map((item, idx) => (
          <motion.div
            key={item.title}
            className="group relative flex items-start gap-4 p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#c084fc]/30 hover:border-[#c084fc]/50 transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            {/* Hover Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-400/5 dark:to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl shrink-0 relative z-10 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors duration-500">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
