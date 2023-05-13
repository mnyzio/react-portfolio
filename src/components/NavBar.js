import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <li><NavLink to={'/'} className={"nav-link"}>About Me</NavLink></li>
                <li><NavLink to={'/portfolio'} className={"nav-link"}>Portfolio</NavLink></li>
                <li><NavLink to={'/contact'} className={"nav-link"}>Contact</NavLink></li>
                <li><NavLink to={'/resume'} className={"nav-link"} >Resume</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;