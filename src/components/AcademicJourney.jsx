import SectionContainer from './SectionContainer';
import { motion } from 'framer-motion';

const journeyData = [
  {
    icon: '🎓',
    degree: 'Bachelor of Technology (B.Tech) — Computer Science & Engineering',
    institution: 'Lovely Professional University, Punjab, India',
    date: 'Aug 2023 - Present',
    scoreLabel: 'CGPA',
    score: '7.2',
    scoreColor: 'text-[#0d9488] dark:text-[#2dd4bf]',
    scoreBg: 'bg-[#14b8a6]/10 border-[#14b8a6]/20',
  },
  {
    icon: '📚',
    degree: 'Intermediate (Class XII) — PCM',
    institution: 'SH Paul Bharati High School, Rohtak, India',
    date: 'Apr 2022 - Mar 2023',
    scoreLabel: 'Percentage',
    score: '69%',
    scoreColor: 'text-[#7c3aed] dark:text-[#a78bfa]',
    scoreBg: 'bg-[#8b5cf6]/10 border-[#8b5cf6]/20',
  }
];

const AcademicJourney = () => {
  return (
    <SectionContainer id="academic" className="py-24">
      
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#c084fc] drop-shadow-sm mb-4">
          Academic Journey
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto flex flex-col gap-6">

        {journeyData.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 md:p-8 bg-white/60 dark:bg-[#15151A]/60 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-colors shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >

            {/* Left Side */}
            <div className="flex items-start gap-4 md:gap-6 w-full md:w-auto">

              <div className="mt-1 md:mt-0 text-3xl shrink-0 p-2 bg-white/50 dark:bg-[#1e1e24]/50 backdrop-blur-md shadow-sm rounded-xl">
                {item.icon}
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-200 leading-tight">
                  {item.degree}
                </h3>

                <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">
                  {item.institution}
                </p>
              </div>

            </div>

            {/* Right Side */}
            <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto mt-2 md:mt-0 gap-4 md:gap-2 pl-12 md:pl-0 shrink-0">

              <span className="text-sm font-mono text-slate-500 whitespace-nowrap">
                {item.date}
              </span>

              <div
                className={`px-4 py-1.5 rounded-full border text-sm font-mono font-semibold ${item.scoreBg} ${item.scoreColor}`}
              >
                {item.scoreLabel}: {item.score}
              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </SectionContainer>
  );
};

export default AcademicJourney;