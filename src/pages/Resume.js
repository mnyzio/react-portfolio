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
        className="py-4"
      >
        <h3 className="text-5xl font-bold">Resume</h3>
      </m.div>
      <Footer />
    </>
  );
}
