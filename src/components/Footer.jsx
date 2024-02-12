import React from 'react';
import "../styles/Footer.css";
import "../styles/Hero.css";

function Footer() {
  return (
    <div className='Featured'>
      <div className="auto">
        <footer>
          <div className='f-flex1'>
            <div className='f-links'>
              <div>
                <h2>About</h2>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">News & Blogs</a></li>
                </ul>
              </div>
              <div>
                <h2>Company</h2>
                <ul>
                  <li><a href="#">How We Work</a></li>
                  <li><a href="#">Capital</a></li>
                  <li><a href="#">Security</a></li>
                </ul>
              </div>
              <div>
                <h2>Support</h2>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">News & Blogs</a></li>
                </ul>
              </div>
            </div>
            <div className="f-form">
              <h2>Keep Yourself Up to Date</h2>
              <p className="f-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque facilisi elementum aliquam a feugiat porta etiam.</p>
              <div className="search sub">
                <form>
                  <input type="email" placeholder='Enter your email address' required />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div className="f-flex2">
            <a href="#" className="logo">
              <img src="https://assets-global.website-files.com/65536c2335f1d63e21d653ca/65536c2335f1d63e21d653f6_Logo.svg" alt="logo" />
            </a>
            <div className='f-contact'>
              <div>
                <p>Contact us:</p>
                <a href="#">hello@homix.com</a>
              </div>
              <div>
                <p>Phone::</p>
                <a href="#">(120) 450 - 6589</a>
              </div>
              <div>
                <p>Location:</p>
                <a href="#">San Francisco, CA</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
        <center><p className='copyright'>Copyright © <span>Homix</span>. All right reserved</p></center>
    </div>
  )
}

export default Footer