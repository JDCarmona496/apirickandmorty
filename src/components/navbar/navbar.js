import React from "react";
import logo from "../../assets/img/logo.png";
import "../Navbar/Navbar.css";

import { NavContainer } from "./Nabvar-elements";

const navbar = () => {
  return (
    <>
      <NavContainer>
        <img src={logo} alt="logo" />
        <div>
          <div className="rectangle">
            <a href="/">Personajes</a>
            <a href="/">Capitulos</a>
            <a href="/">Aleatoriedad</a>
          </div>
        </div>
      </NavContainer>
    </>
  );
};

export default navbar;
