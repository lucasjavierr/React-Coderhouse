import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNotification } from "../../notification/NotificationService";
import { getCategories } from "../../services/firebase/firestore/products";
import CartWidget from "../CartWidget/CartWidget";
import s from "./Navbar.module.css";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const { setNotification } = useNotification();
  const menuBackdropRef = useRef(null);

  useEffect(() => {
    getCategories()
      .then((resolve) => {
        setCategories(resolve);
      })
      .catch((reject) => {
        setNotification(
          "error",
          `Hubo un error al obtener las categorías, ${reject}`
        );
      });
  }, []);

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link to="/">
          <h1>
            Component <span>Hardware</span>
          </h1>
        </Link>
        <CartWidget />
      </div>
      <nav className={s.navbar}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? s.active : s.inactive)}
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
            >
              Todos los productos
            </NavLink>
          </li>
          {categories.map((category) => (
            <li key={category.key}>
              <NavLink
                to={`/category/${category.key}`}
                className={({ isActive }) => (isActive ? s.active : s.inactive)}
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
              >
                {category.description}
              </NavLink>
            </li>
          ))}
          <div
            id="menu-backdrop"
            className={s.boxNavLinks}
            ref={menuBackdropRef}
          ></div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
