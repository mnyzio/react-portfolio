import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-between py-5">
      <div>
        <h4>Mirek Nyzio</h4>
      </div>
      <ul className="flex gap-x-3">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              if (isActive) {
                return "p-2 rounded-md bg-orange text-white";
              } else {
                return "p-2 rounded-md hover:text-white hover:bg-orange";
              }
            }}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/portfolio"}
            className={({ isActive }) => {
              if (isActive) {
                return "p-2 rounded-md bg-orange text-white";
              } else {
                return "p-2 rounded-md hover:text-white hover:bg-orange";
              }
            }}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => {
              if (isActive) {
                return "p-2 rounded-md bg-orange text-white";
              } else {
                return "p-2 rounded-md hover:text-white hover:bg-orange";
              }
            }}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/resume"}
            className={({ isActive }) => {
              if (isActive) {
                return "p-2 rounded-md bg-orange text-white";
              } else {
                return "p-2 rounded-md hover:text-white hover:bg-orange";
              }
            }}
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
