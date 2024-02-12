import React from 'react';
import "../styles/Hero.css";

function Hero() {
  return (
    <div className='Hero'>
        <center><p className="heading">The best place to find <span>your dream house</span></p></center>
        <center><p className="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat purus suscipit turpis sed vitae.</p></center>
        <div className="search">
            <form>
                <input type="text" placeholder='Search for city, neighorhood, agent, address...' required />
                <button type="submit">Search</button>
            </form>
        </div>
    </div>
  )
}

export default Hero