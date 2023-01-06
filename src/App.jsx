import About from './components/About';
import Bot from './components/Bot';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';
import Works from './components/Works';

function App() {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Project />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
