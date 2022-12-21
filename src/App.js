import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
       <Navbar />
      

      <Routes>
        <Route path="/home" element={<Home />}> </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={ <Contact />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
