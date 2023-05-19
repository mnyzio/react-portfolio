import { motion as m } from "framer-motion";
import Footer from "../components/Footer";
import Project from "../components/Project";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: .2,
      duration: 0.8,      
      ease: "easeInOut",
    },
  },
};

export default function Portfolio(props) {
  return (
    <>
      <m.div
        initial={{ y: "10", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 0 }}
        className="py-4 mt-8"
      >
        <h3 className="text-5xl font-bold">Portfolio</h3>
        <h5 className="p-4 leading-8">Here are some of my projects:</h5>
        {/* project container */}
        {/* <div className="flex flex-wrap justify-evenly p-4 gafp-x-2 gap-y-4 space-x-3"> */}
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="sm:grid-cols-2 md:grid-cols-3 grid gap-4 mb-6"
        >
          {/* Loop through all the projects creating card for each */}
          {/* project card */}
          {props.projects.map((project) => (            
            <Project project={project} />
          ))}
        </m.div>
      </m.div>
      <Footer />
    </>
  );
}
