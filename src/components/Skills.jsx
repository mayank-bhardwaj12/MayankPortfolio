import SectionContainer from './SectionContainer';
import { motion } from 'framer-motion';
import { 
  SiCplusplus, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiExpress, 
  SiTailwindcss, 
  SiMysql, 
  SiMongodb, 
  SiPostman, 
  SiVercel 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaBrain, FaCubes } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" /> },
      { name: 'Java', icon: <FaJava className="text-[#007396]" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" /> },
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'ReactJS', icon: <SiReact className="text-[#61DAFB]" /> },
      { name: 'NodeJS', icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'NextJS', icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: 'ExpressJS', icon: <SiExpress className="text-black dark:text-white" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: 'GitHub', icon: <FaGithub className="text-black dark:text-white" /> },
      { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" /> },
      { name: 'VS Code', icon: <VscVscode className="text-[#007ACC]" /> },
    ]
  },
  {
    title: 'Core Skills',
    skills: [
      { name: 'Data Structures & Algorithms', icon: <FaBrain className="text-purple-500" /> },
          { name: 'OOP', icon: <FaCubes className="text-blue-300" /> },
    ]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <SectionContainer id="skills">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-[#c084fc] drop-shadow-sm">Skills</span></h2>
        <div className="w-20 h-1 bg-[#c084fc] mx-auto rounded-full mb-8"></div>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Here are the technologies and tools I work with to build my projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#c084fc]/20 hover:border-[#c084fc]/50 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center justify-between">
              {category.title}
            </h3>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="flex flex-col items-center justify-center p-3 w-[100px] h-[100px] bg-slate-50 dark:bg-slate-900 rounded-xl group hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 border border-slate-100 dark:border-slate-700"
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <span className="text-xs text-center font-medium text-slate-600 dark:text-slate-400 group-hover:text-[#c084fc] transition-colors drop-shadow-sm">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Skills;
