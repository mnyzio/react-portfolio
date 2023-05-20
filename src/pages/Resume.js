import { motion as m } from "framer-motion";
import Footer from "../components/Footer";
import Skill from "../components/Skill";
import Education from "../components/Education";
import { frontSkills } from "../utils/skills/frontSkils";
import { backSkills } from "../utils/skills/backSkills";

export default function Resume() {
  return (
    <>
      <m.div
        initial={{ y: "10", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 0 }}
        className="py-4 mt-8"
      >
        {/* Title */}
        <h3 className="text-5xl font-bold">Resume</h3>
        {/* Download section */}
        <div className="p-2 my-4 text-orange">
          <a
            href="./assets/files/portfolio.pdf"
            target="_blank"
            download
            className="flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            <span className="ml-2">Download resume</span>
          </a>
        </div>
        {/* Languages */}
        <h5 className="bg-gray-900 text-gray-50 inline-block p-2 font-bold rounded-md shadow-lg my-6 text-xl">
          Proficiencies
        </h5>
        <div className="px-4 pb-4 pt-2 bg-gray-100 flex flex-col">
          <article>
            <h3 className="bg-orange text-white my-4 inline-block p-2 rounded-md shadow-lg font-bold">
              Front-end
            </h3>
            <div className="px-4 flex flex-wrap gap-4">
              {frontSkills.map((skill, index) => (
                <Skill skill={skill} key={index} />
              ))}
            </div>
          </article>
          <article>
            <h3 className="bg-orange text-white my-4 inline-block p-2 rounded-md shadow-lg font-bold">
              Back-end
            </h3>
            <div className="px-4 flex flex-wrap gap-4">
              {backSkills.map((skill, index) => (
                <Skill skill={skill} key={index} />
              ))}
            </div>
          </article>
        </div>
        {/* Educaiton */}
        <Education />
      </m.div>
      <Footer />
    </>
  );
}
