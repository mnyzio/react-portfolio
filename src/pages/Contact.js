import { useState } from "react";
import validateEmail from "../utils/helpers";
import { motion as m } from "framer-motion";
import Footer from "../components/Footer";

export default function Contact() {
  // setting variables for form fields and errors, setting initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  // On blur fields validation
  const handleBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "full-name") {
      if (!inputValue) {
        setNameError("* Required field");
      } else {
        setNameError("");
      }
    }

    if (inputType === "email") {
      if (!inputValue) {
        setEmailError("* Required field");
      } else if (!validateEmail(email)) {
        setEmailError("* Invalid e-mail address");
      } else {
        setEmailError("");
      }
    }

    if (inputType === "message") {
      if (!inputValue) {
        setMessageError("* Required field");
      } else {
        setMessageError("");
      }
    }
  };

  // On change form handling
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "full-name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // Form submit 
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check to see if user entered name
    if (!name) {
      setErrorMessage("Please enter your name");
      document.getElementById("full-name").focus();
      return;
    }

    // Check to see if user entered valid e-mail address
    if (!validateEmail(email)) {
      setErrorMessage("Please enter valid e-mail address");
      document.getElementById("email").focus();
      return;
    }

    // Check to see if user entered message
    if (!message) {
      setErrorMessage("Message field cannot be empty");
      document.getElementById("message").focus();
      return;
    }

    //
    alert(`Thank you for your message ${name}.`);

    setEmail("");
    setName("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <>
      <m.section
        initial={{ y: "10%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 0 }}
        className="py-4"
      >
        <h3 className="text-5xl font-bold">Contact</h3>
        <div className="p-4 leading-8 md:text-center">
          <p>Get in touch! I'd love to hear from you.</p>
          <p>
            I always welcome any opportunity to grow and expand upon my skills.
          </p>
          <p>Have any questions or ideas you would like to discuss ?</p>
          <p>Let's meet, coffee's on me!</p>
        </div>
        <form className="w-full max-w-lg mx-auto py-4">
          <div className="md:flex md:items-center ">
            <div className="md:w-1/3">
              <label
                className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="full-name"
              >
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-body-bg-color rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-orange"
                name="full-name"
                id="full-name"
                onChange={handleInputChange}
                onBlur={handleBlur}
                value={name}
                type="text"
                placeholder="Jane Doe"
              />
            </div>
          </div>
          {/* check for missing name */}
          <div className="md:flex md:items-center py-1">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <p className="text-red-600 text-sm">
                {nameError}
                <span className="text-white">s</span>
              </p>
            </div>
          </div>
          {/* e-mail input and validation */}
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="email"
              >
                E-mail
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-body-bg-color rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-orange"
                name="email"
                id="email"
                onChange={handleInputChange}
                onBlur={handleBlur}
                value={email}
                type="text"
                placeholder="jdoe@example.com"
              />
            </div>
          </div>
          {/* check for missing email */}
          <div className="md:flex md:items-center py-1">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <p className="text-red-600 text-sm">
                {emailError}
                <span className="text-white">s</span>
              </p>
            </div>
          </div>
          {/* message input and validation */}
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="message"
              >
                Message
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea
                className="bg-gray-200 appearance-none border-2 border-body-bg-color rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-orange"
                name="message"
                id="message"
                onChange={handleInputChange}
                onBlur={handleBlur}
                value={message}
                type="text"
                placeholder="Type here..."
                rows={10}
              />
            </div>
          </div>
          {/* check for missing message */}
          <div className="md:flex md:items-center py-1">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <p className="text-red-600 text-sm">
                {messageError}
                <span className="text-white">s</span>
              </p>
            </div>
          </div>
          {/* form submit */}
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-orange hover:opacity-90 transition-all duration-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </div>
          </div>
          {errorMessage && (
            <m.div
              initial={{ y: "10%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              exit={{ opacity: 0 }}
              className="md:flex md:items-center"
            >
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <p className="text-red-600 mt-3">{errorMessage}</p>
              </div>
            </m.div>
          )}
        </form>
      </m.section>
      <Footer />
    </>
  );
}
