import React from "react";
import styled from "styled-components";
import logo from "../../assets/img/logo.png";
import "../Navbar/Navbar.css";
import BurguerButton from "./BurguerButton";
import { useState } from 'react'

function Navbar() {
  
  const [clicked, setClicked] = useState(false)
  
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }

  return (
    <>
      <NavContainer>
        <img src={logo} alt="logo" />
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#h">Personajes</a>
          <a onClick={handleClick} href="#h">Capitulos</a>
          <a onClick={handleClick} href="#h">Aleatoriedad</a>
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick}/>
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  img {
    width: auto;
    height: 70px;
    margin-left: 4rem;
    margin-top: .2rem; 
    margin-bottom: .2rem;
  }

  padding: .4rem;
  background-color: #2C352A;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    padding: .0rem;
    color: White;
    text-decoration: none;
    margin-right: 3rem;
    font-family: Marvel;
    font-size: 25px;
    font-family: Marvel;
  }

  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 3rem;
      display: block;
      font-family: Marvel;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 2rem;
        color: white;
        display: inline;
        font-family: Marvel;
      }
      display: block;
    }
  }

  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }

  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
  
`
const BgDiv = styled.div`
background-color: #222;
position: absolute;
top: -1000px;
left: -1000px;
width: 100%;
height: 100%;
z-index: -1;
transition: all .6s ease;

&.active{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  }
  `