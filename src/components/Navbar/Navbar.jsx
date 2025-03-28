import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

export default function Navbar({ navLinks }) {
  return (
    <>
      <header className={classes.header}>
        <nav className={classes.navbar}>
          <ul>
            {navLinks.map((navLink) => (
              <li key={navLink.navItem}>
                <NavLink
                  to={navLink.navDest}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  {navLink.navItem}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
