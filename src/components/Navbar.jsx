import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

import { BiMenu } from "react-icons/bi";

function Navbar({ click }) {
    const [navbar, setNavbar] = useState(false);
  
    const navbarActive = () => {
      if(window.scrollY > 0) {
        setNavbar(true);
      } else {
        setNavbar(false)
      }
    }
  
    window.addEventListener("scroll", navbarActive);

  return (
    <div className={navbar ? "Navbar active" : "Navbar"}>
      <div className="auto">
        <nav className={navbar ? "navbar active" : "navbar"}>
            <a href="#" className="logo">
                <img src="https://assets-global.website-files.com/65536c2335f1d63e21d653ca/65536c2335f1d63e21d653f6_Logo.svg" alt="logo" />
            </a>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/properties">Properties</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="#">Cart</Link></li>
            </ul>
            <div className='nav-right'>
                <a href="mailto:artyom.agadzhanyan250@gmail.com" className="contact">Contact Us</a>
                <i onClick={click}><BiMenu /></i>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar