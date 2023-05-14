import { motion as m } from "framer-motion";

export default function About() {
  return (
    <m.div
      initial={{ y: "20%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className="py-4"
    >
      <h3 className="text-5xl font-bold">About</h3>
      <p className="p-3">
        Hi there! I'm Mirek, and I am a Full Stack Developer with background in
        logistics and operations. Passionale developer / coder with solid
        foundation in software development. Calm under pressure, quick learner
        with the goal of customer satisfaction.
      </p>
    </m.div>
  );
}
