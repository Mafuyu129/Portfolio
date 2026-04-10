import { useTheme } from './hooks/useTheme';
import { useShineEffect } from './hooks/useShine';
import { useReveal } from './hooks/useReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const { theme, toggleTheme } = useTheme();
  
  // Initialize interactive effects
  useShineEffect();
  useReveal();

  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-glow"></div>
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
