import { motion as m } from "framer-motion";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Portfolio(props) {
  return (
    <>
      <m.div
        initial={{ y: "10", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 0 }}
        className="py-4"
      >
        <h3 className="text-5xl font-bold">Portfolio</h3>
        {/* project container */}
        <div className="flex">
          {/* Loop through all the projects creating card for each */}
          {/* project card */}
          {props.projects.map((project) => (
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg"
              key={project.id}
            >
              <img
                className="w-full"
                src={project.imageSrc}
                alt={project.imageAlt}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {project.projectName}
                </div>
                <p className="text-base">{project.projectDesc}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <Link to={project.linkDeployed} target="_blank">
                  <div className="inline-block bg-orange rounded-lg px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:opacity-90 transition-all duration-300 shadow-lg">
                    Deployed website
                  </div>
                </Link>
                <Link to={project.linkGitHub} target="_blank">
                  <div className="inline-block bg-orange rounded-lg px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:opacity-90 transition-all duration-300 shadow-lg">
                    GitHub Repo
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </m.div>
      <Footer />
    </>
  );
}
