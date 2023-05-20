import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";

function NavBar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="w-48">
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex gap-x-2">
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            if (isActive) {
              return "p-1 rounded bg-orange text-white shadow-xl";
            } else {
              return "p-1 rounded hover:text-white hover:bg-orange transform-all duration-300 hover:shadow-xl ";
            }
          }}
        >
          <li>About Me</li>
        </NavLink>
        <NavLink
          to={"/portfolio"}
          className={({ isActive }) => {
            if (isActive) {
              return "p-1 rounded bg-orange text-white shadow-xl";
            } else {
              return "p-1 rounded hover:text-white hover:bg-orange transform-all duration-300 hover:shadow-xl ";
            }
          }}
        >
          <li>Portfolio</li>
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => {
            if (isActive) {
              return "p-1 rounded bg-orange text-white shadow-xl";
            } else {
              return "p-1 rounded hover:text-white hover:bg-orange transform-all duration-300 hover:shadow-xl ";
            }
          }}
        >
          <li>Contact</li>
        </NavLink>
        <NavLink
          to={"/resume"}
          className={({ isActive }) => {
            if (isActive) {
              return "p-1 rounded bg-orange text-white shadow-xl";
            } else {
              return "p-1 rounded hover:text-white hover:bg-orange transform-all duration-300 hover:shadow-xl ";
            }
          }}
        >
          <li>Resume</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
