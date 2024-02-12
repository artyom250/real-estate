import React from 'react';
import { Link } from "react-router-dom";
import { BiGridAlt } from "react-icons/bi";
import { BiBuildingHouse } from "react-icons/bi";
import { BiNews } from "react-icons/bi";
import { BiPlusCircle } from "react-icons/bi";
import "../styles/Sidebar.css";

function Sidebar({ click, effect }) {
  return (
    <div className="Sidebar">
      <div className={effect ? "menu show" : "menu"}>
        <ul>
          <li>
            <Link to="/" onClick={click}>
              <i><BiGridAlt /></i>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/properties" onClick={click}>
              <i><BiBuildingHouse /></i>
              <span>Properties</span>
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={click}>
              <i><BiNews /></i>
              <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link to="#" onClick={click}>
              <i><BiPlusCircle /></i>
              <span>Cart</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={effect ? "overlay show" : "overlay"} onClick={click}></div>
    </div>
  )
}

export default Sidebar