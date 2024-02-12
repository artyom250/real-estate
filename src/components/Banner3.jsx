import React from 'react';
import "../styles/Banner3.css";

function Banner3() {
  return (
    <div className='Featured' id='contact'>
        <div className="auto">
            <div className="Banner3">
                <div className="banner3-img">
                    <img src="https://images.unsplash.com/photo-1689074039083-8dc32788da57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner3" />
                </div>
                <div className="banner3-text">
                    <p className="banner3-head">Get in touch with us and lets talk</p>
                    <p className="b2-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh pretium nunc mauris sed adipiscing.</p>
                    <div className="b3-grid">
                        <a href="#">
                            <div>
                                <p>Email</p>
                                <p>hello@homix.com</p>
                            </div>
                        </a>
                        <a href="#">
                            <div>
                                <p>Location #1</p>
                                <p>San Francisco, CA</p>
                            </div>
                        </a>
                        <a href="#">
                            <div>
                                <p>Phone</p>
                                <p>(120) 450 - 6589</p>
                            </div>
                        </a>
                        <a href="#">
                            <div>
                                <p>Location #2</p>
                                <p>San Francisco, CA</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner3