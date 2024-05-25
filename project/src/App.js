import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Layout from './components/Layout';
import Contact from './components/Contact';
import Education from './components/Education';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <Education/>
        <Skills/>
        <Projects/>
        <Interests/>
        <Contact/>
      </Layout>
    </div>
  );
}

export default App;
