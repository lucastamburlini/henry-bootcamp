import React from "react";
import logoHenry from "../../assets/logo-henry.png";
import { NavLink } from "react-router-dom";

import styleNav from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? "active" : "disable";
          }}
        >
          <img src={logoHenry} alt="logo-henry" />
        </NavLink>
        <NavLink>
          <h1>Central de Cruceros</h1>
        </NavLink>
        <div className={styleNav.options}>
          <NavLink to="/shipping">
            <span>Navieras</span>
          </NavLink>
          <NavLink to="/discounts">
            <span>Promociones</span>
          </NavLink>
        </div>
      </ul>
    </div>
  );
}
