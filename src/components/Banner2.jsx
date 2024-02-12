import React from 'react';
import "../styles/Banner2.css";

import { BiSolidQuoteAltLeft } from "react-icons/bi";

function Banner2() {
  return (
    <div className='Featured banner'>
        <div className="auto">
            <div className="Banner2">
                <div className="banner2-text">
                    <i><BiSolidQuoteAltLeft /></i>
                    <p className="b2-head">“People now recognise that having a good performance conversation means that something happens as a result.”</p>
                    <p className="b2-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh pretium nunc mauris sed adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
                <div className="banner-img">
                    <img src="https://yt3.googleusercontent.com/ytc/AIf8zZTQaZWtI-ZW90_yWI0uy9xroRTeMJVlhdGpkohxCw=s900-c-k-c0x00ffffff-no-rj" alt="" />
                    <div className="name">
                        <p>John Watson</p>
                        <p>Product manager at Homix</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner2