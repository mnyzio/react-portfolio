import { motion as m } from "framer-motion";
import Footer from "../components/Footer";

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
        {/* Educaiton */}
        <h5>Education</h5>

        <h5>Skills / Languages</h5>
        <ul>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>
            <ul>
              <li>Bootstrap</li>
              <li>Tailwind</li>
              <li>Bulma</li>
            </ul>
          </li>
          <li></li>
          <li></li>
        </ul>
        {/* Download section */}
        <div className="border border-orange inline-block rounded-lg p-2">
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
              class="w-6 h-6"
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
      </m.div>
      <Footer />
    </>
  );
}
