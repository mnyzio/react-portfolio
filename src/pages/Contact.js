import { motion as m } from "framer-motion";

export default function Contact() {
  return (
    <m.section
      initial={{ y: "20%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className="py-4"
    >
      <h3 className="text-5xl font-bold">Contact</h3>
    </m.section>
  );
}
