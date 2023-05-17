// Libraries
import { Route, Routes } from "react-router-dom";
// Styles
import "./index.css";
// Pages
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
// Components
import NavBar from "./components/NavBar";
// Projects
import { projects } from "./utils/projects/projects";

function App() {
  return (
    // Page wrapper
    <div className="w-full flex flex-col items-center px-4 sm:px-12">
      {/* Content wrapper */}
      <div className="bg-white w-full max-w-screen-lg m-4 p-4 rounded-lg shadow-lg">
        <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio projects={ projects } />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {/* <!-- Copyright section --> */}
      <div className="mb-4">
        <p className="text-center">
          Copyright © Mirek Nyzio {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default App;
