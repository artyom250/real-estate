import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Banner.css";

function Banner() {
  return (
    <div className='Featured banner'>
      <div className="auto">
        <div className="Banner">
            <div className="banner-text">
                <p className="banner-head"><span>Discover properties</span> that will improve your life and that of your family</p>
                <p className="banner-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh pretium nunc mauris sed adipiscing.</p>
                <Link to="/properties" className="banner-link">To catalog</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner