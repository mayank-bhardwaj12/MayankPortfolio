import { ThemeProvider } from './contexts/ThemeContext';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AcademicJourney from './components/AcademicJourney';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen text-slate-900 dark:text-slate-100 font-sans transition-colors duration-500 selection:bg-[#c084fc]/30 relative z-0">
        <AnimatedBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <AcademicJourney />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
