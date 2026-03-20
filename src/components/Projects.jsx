import SectionContainer from './SectionContainer';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Sehat Sathi',
    subtitle: 'Doctor Appointment Booking System',
    description: 'A MERN stack web application enabling seamless doctor appointment booking with JWT authentication, user and admin panels, and dynamic time slot scheduling.',
    tech: ['MongoDB', 'Express', 'React', 'Node', 'Tailwind CSS', 'JWT'],
    github: 'https://github.com/mayank-bhardwaj12/SehatSathi',
    image: '/sehatsathi-mockup.png'
  },
  {
    title: 'Ocean Guard',
    subtitle: 'Ocean Hazards Reporting Platform',
    description: 'A full-stack environmental monitoring platform allowing users to report ocean hazards and visualize real-time data dashboards with protected routes.',
    tech: ['TypeScript', 'React', 'Node', 'Express', 'Tailwind CSS'],
    github: 'https://github.com/mayank-bhardwaj12/Ocean-Guard',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800'
  }
];

const Projects = () => {
  return (
    <SectionContainer id="projects" className="bg-white/30 dark:bg-slate-900/40 backdrop-blur-md border-y border-white/20 dark:border-slate-800/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-[#c084fc] drop-shadow-sm">Projects</span></h2>
        <div className="w-20 h-1 bg-[#c084fc] mx-auto rounded-full mb-8"></div>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Here is a selection of my recent works that demonstrate my technical and problem-solving skills.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.title}
            className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-[#c084fc]/30 hover:border-[#c084fc]/50 transition-all duration-500 flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            {/* Project Image */}
            <div className="w-full h-64 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-[#c084fc] hover:scale-110 transition-all"
                  aria-label="GitHub Repository"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-[#c084fc] hover:scale-110 transition-all cursor-not-allowed"
                  title="Live Demo Not Available"
                  aria-label="Live Demo"
                  onClick={(e) => e.preventDefault()}
                >
                  <FaExternalLinkAlt className="w-6 h-6 opacity-50" />
                </a>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-1 text-slate-900 dark:text-white group-hover:text-[#c084fc] transition-colors drop-shadow-sm hover:drop-shadow-md">
                {project.title}
              </h3>
              <h4 className="text-sm font-medium text-[#c084fc] drop-shadow-sm mb-4">
                {project.subtitle}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
