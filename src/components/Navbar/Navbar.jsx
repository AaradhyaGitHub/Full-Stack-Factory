import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

export default function Navbar({ tags, navDestination }) {
  return (
    <>
      <header classsName={classes.header}>
        <nav classsName={classes.navbar}>
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>
                <NavLink
                  to={navDestination}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  {tag}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
