import About from './components/About';
import Bot from './components/Bot';
import Education from './components/Education';
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
    </div>
  );
}

export default App;
