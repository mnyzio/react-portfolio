import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    // <nav className="flex justify-between items-center">
    <nav className="flex justify-between md:items-center">
      <div className="w-48">
        <img src={logo} alt="logo" />
      </div>
      {/* Navbar */}
      {/* <div className="flex flex-col md:flex-row relative"> */}
      {/* <div className="flex flex-col md:flex-row"> */}
      <div className="relative">
        {/* Hamburger button */}
        {/* <div className="md:hidden" onClick={() => setNavOpen(!navOpen)}> */}
        <div className="mt-4 md:hidden" onClick={() => setNavOpen(!navOpen)}>
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        {/* Navlist items */}
        <ul
          className={
            navOpen
              ? "md:flex md:gap-x-2 absolute w-24 right-0 top-12 text-right md:relative md:top-0 md:w-full"
              : // "md:flex md:gap-x-2 absolute top-8 w-full border md:relative"
                "hidden md:flex md:gap-x-2"
          }
        >
          {/* // className="hidden md:flex md:gap-x-2"> */}
          <NavLink
            to={"/"}
            onClick={() => setNavOpen(false)}
            className={({ isActive }) => {
              if (isActive) {
                return "md:p-1 md:rounded md:bg-orange md:text-white md:shadow-xl";
              } else {
                return "md:p-1 md:rounded md:hover:text-white md:hover:bg-orange transform-all duration-300 md:hover:shadow-xl ";
              }
            }}
          >
            <li>About Me</li>
          </NavLink>
          <NavLink
            to={"/portfolio"}
            onClick={() => setNavOpen(false)}
            className={({ isActive }) => {
              if (isActive) {
                return "md:p-1 md:rounded md:bg-orange md:text-white md:shadow-xl";
              } else {
                return "md:p-1 md:rounded md:hover:text-white md:hover:bg-orange transform-all duration-300 md:hover:shadow-xl ";
              }
            }}
          >
            <li>Portfolio</li>
          </NavLink>
          <NavLink
            to={"/contact"}
            onClick={() => setNavOpen(false)}
            className={({ isActive }) => {
              if (isActive) {
                return "md:p-1 md:rounded md:bg-orange md:text-white md:shadow-xl";
              } else {
                return "md:p-1 md:rounded md:hover:text-white md:hover:bg-orange transform-all duration-300 md:hover:shadow-xl ";
              }
            }}
          >
            <li>Contact</li>
          </NavLink>
          <NavLink
            to={"/resume"}
            onClick={() => setNavOpen(false)}
            className={({ isActive }) => {
              if (isActive) {
                return "md:p-1 md:rounded md:bg-orange md:text-white md:shadow-xl";
              } else {
                return "md:p-1 md:rounded md:hover:text-white md:hover:bg-orange transform-all duration-300 md:hover:shadow-xl ";
              }
            }}
          >
            <li>Resume</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
