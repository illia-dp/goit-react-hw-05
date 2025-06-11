import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Container from "../Container/Container";
import css from "./Header.module.css";

const addActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
      setIsScrollingDown(true);
    } else if (currentScrollY < prevScrollY.current) {
      setIsScrollingDown(false);
    }

    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${css.header} ${isScrollingDown ? css.hidden : ""}`}>
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
