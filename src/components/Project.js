import { Link } from "react-router-dom";
import { motion as m } from 'framer-motion';

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function Project({project}) {
  return (
    <m.div
      variants={item}
      className="mdax-w-sm rounded overflow-hidden shadow-lg border transition-all duration-300 hover:scale-105 hover:shadow-xl"
      key={project.id}
    >
      <img className="w-full" src={project.imageSrc} alt={project.imageAlt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.projectName}</div>
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
    </m.div>
  );
}

export default Project;