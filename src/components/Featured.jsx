import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/Featured.css";

function Featured() {
  return (
    <div className='Featured'>
      <div className="auto">
        <div className='block-flex'>
          <p className="block-head">Featured properties</p>
          <Link to="/properties" className='block-link'>Explore All Listings</Link>
        </div>
        <div className="featured-list">
          <a href="#">
            <div className='feature'>
              <div className="grid-img">
                <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="grid" />
              </div>
              <div className="grid-text">
                <div className="price-flex">
                  <p className="price">$ 360,000.00 USD</p>
                  <p className="type">Sale</p>
                </div>
                <p className="title">Peak Perfection</p>
                <p className="grid-desc">Stunning Mountain Retreats</p>
                <div className="info">
                  <p>5 beds</p>
                  <p>2 bathrooms</p>
                  <p>110 m2</p>
                </div>
              </div>
            </div>
          </a>
          <br />
          <a href="#">
            <div className='feature'>
              <div className="grid-img">
                <img src="https://images.unsplash.com/photo-1543071293-d91175a68672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="grid" />
              </div>
              <div className="grid-text">
                <div className="price-flex">
                  <p className="price">$ 20,000.00 USD</p>
                  <p className="type rent">For rent</p>
                </div>
                <p className="title">Classic Charm</p>
                <p className="grid-desc">Georgian Townhouses in the Heart of the City</p>
                <div className="info">
                  <p>2 beds</p>
                  <p>1 bathrooms</p>
                  <p>75 m2</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <center><Link to="/properties" className='block-link-two'>Explore All Listings</Link></center>
    </div>
  )
}

export default Featured