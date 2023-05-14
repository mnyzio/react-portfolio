import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-between py-3 items-center">
      <div>
        <h4>Mirek Nyzio</h4>
      </div>
      <ul className="flex gap-x-3">
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            if (isActive) {
              return "p-2 rounded bg-orange text-white shadow-xl";
            } else {
              return "p-2 rounded hover:text-white hover:bg-orange transform-all duration-300 hover:scale-110 hover:shadow-xl ";
            }
          }}
        >
          <li>About Me</li>
        </NavLink>
        <NavLink
          to={"/portfolio"}
          className={({ isActive }) => {
            if (isActive) {
              return "p-2 rounded bg-orange text-white shadow-xl";
            } else {
              return "p-2 rounded hover:text-white hover:bg-orange transform-all duration-300 hover:scale-110 hover:shadow-xl ";
            }
          }}
        >
          <li>Portfolio</li>
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => {
            if (isActive) {
              return "p-2 rounded bg-orange text-white shadow-xl";
            } else {
              return "p-2 rounded hover:text-white hover:bg-orange transform-all duration-300 hover:scale-110 hover:shadow-xl ";
            }
          }}
        >
          <li>Contact</li>
        </NavLink>
        <NavLink
          to={"/resume"}
          className={({ isActive }) => {
            if (isActive) {
              return "p-2 rounded bg-orange text-white shadow-xl";
            } else {
              return "p-2 rounded hover:text-white hover:bg-orange transform-all duration-300 hover:scale-110 hover:shadow-xl ";
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
