import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/portfolio'}>Portfolio</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
        <li><Link to={'/resume'}>Resume</Link></li>
      </ul>  
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/resume' element={<Resume />} />
    </Routes>
  </>
  )
}

export default App;