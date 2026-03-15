import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      
      {/* Light Mode Blobs */}
      <div className="absolute inset-0 dark:hidden opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-300 mix-blend-multiply filter blur-[100px] opacity-70"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[20%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-blue-300 mix-blend-multiply filter blur-[100px] opacity-70"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-[10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-indigo-300 mix-blend-multiply filter blur-[100px] opacity-70"
        />
      </div>

      {/* Dark Mode Blobs */}
      <div className="absolute inset-0 hidden dark:block opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-900 mix-blend-screen filter blur-[120px] opacity-60"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[20%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-blue-900 mix-blend-screen filter blur-[120px] opacity-60"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-[10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-indigo-900 mix-blend-screen filter blur-[120px] opacity-60"
        />
      </div>
      
      {/* Noise overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
    </div>
  );
};

export default AnimatedBackground;
