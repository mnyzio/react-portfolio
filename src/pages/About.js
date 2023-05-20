import { motion as m } from "framer-motion";
import Footer from "../components/Footer";
import profilePic from "../img/Profile-picture-bw.jpg";

export default function About() {
  return (
    <>
      <m.div
        initial={{ y: "10", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 0 }}
        className="py-4 mt-8"
      >
        <h3 className="text-5xl font-bold mb-8">About</h3>
        {/* Hero section */}
        <section
          id="hero-wrapper"
          className="flex flex-col items-center md:flex-row md:justify-evenly md:mb-12"
        >
          {/* Left / text side of hero section */}
          <div
            id="hero-name"
            className="w-full md:w-1/2 flex flex-col items-center"
          >
            <h1 className="z-10 text-8xl font-extrabold">Mirek</h1>
            <h1 className="z-10 text-8xl font-extrabold">Nyzio</h1>
            <div
              id="hero-sub-text-container"
              className="relative z-0 left-2 text-white bg-orange px-8 py-2 text-xl rounded-md shadow-lg font-semibold -rotate-3"
            >
              <p id="hero-sub-text">Full-Stack Web Developer</p>
            </div>
          </div>
          {/* Right / avatar side of hero section */}
          <div id="hero-avatar" className="w-full flex justify-center mt-4 md:mt-0 md:w-1/2">
            <img
              src={profilePic}
              alt="Avatar"
              className="w-56 md:w-80 rounded-full shadow-lg"
            />
          </div>
        </section>
        <p className="p-12">
          Hi there! I'm Mirek, and I am a Full Stack Developer with background
          in logistics and operations. Passionale developer / coder with solid
          foundation in software development. Calm under pressure, quick learner
          with the goal of customer satisfaction.
        </p>
      </m.div>
      <Footer />
    </>
  );
}
