import React from "react";
import logoHenry from "../../assets/logo-henry.png";
import { NavLink } from "react-router-dom";

import styleNav from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
        <li>
          <NavLink to="/">
            <img src={logoHenry} alt="logo-henry" />
          </NavLink>
        </li>
        <li>
          <h1>Central de Cruceros</h1>
        </li>
        <div className={styleNav.options}>
          <li>
            <NavLink
              to="/shipping"
              className={({ isActive }) => {
                return isActive ? styleNav.active : styleNav.disable;
              }}
            >
              <span>Navieras</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/discounts">
              <span>Promociones</span>
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
}
