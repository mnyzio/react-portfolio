import { NavLink, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/portfolio'}>Portfolio</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
        <li><NavLink to={'/resume'}>Resume</NavLink></li>
      </ul>  
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </>
  )
}

export default App;