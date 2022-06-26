import React, { useState } from "react";
import "./NavbarStyle.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll'



const Navbar = () => {
  // change nav background color
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if(window.scrollY >= 750){
      setColor(true)
    }else setColor(false)
  }

  {window.addEventListener("scroll", changeColor)}

  // mobile menu
  const [click, setClick] = useState(false);
  const clicked = () => setClick(!click);

  // closing on the nav click
  const closeMenu = () => setClick(false)
  return (
    <>
      <div className=  {color ? "nav-container bg-color":"nav-container"}   >
        <span style={{ marginLeft: "1rem" }} className="logo">
          HMZ
        </span>
        <ul className={click ? "nav-list active" : "nav-list"}>
          <li >
          <Link style={{cursor:"pointer"}}
              to="home"
          
              smooth={true}
             
              duration={2000}
              onClick={closeMenu}
              
            >
              Home
            </Link>          </li>
          <li>
          <Link style={{cursor:"pointer"}}
              to="about"
          
              smooth={true}
             
              duration={2000}
              onClick={closeMenu}
              
            >
              About Me
            </Link>           </li>
          <li>
          <Link style={{cursor:"pointer"}}
              to="contact"
              smooth={true}

              duration={2000}
              onClick={closeMenu}
              
            >
              Contact Me
            </Link> 
          </li>
        </ul>
        <div className="humb" onClick={clicked}>
          {click ? (
            <FaTimes size={25} cursor="pointer" />
          ) : (
            <FaBars size={25} cursor="pointer" />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
