import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Container from "../Container/Container";
import css from "./Header.module.css";

const addActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <nav className={css.nav}>
          <ul className={css.list}>
            <li>
              <NavLink className={addActive} to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={addActive} to={"/movies"}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
