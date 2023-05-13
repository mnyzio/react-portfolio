import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-between">
      <div>
        <h4>Mirek Nyzio</h4>
      </div>
      <ul className="flex">
        <li>
          <NavLink to={"/"} className={"hover:text-orange"}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to={"/portfolio"} className={"hover:text-orange"}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} className={"hover:text-orange"}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to={"/resume"} className={"hover:text-orange"}>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
