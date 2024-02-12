import React from 'react';
import "../styles/Home.css";

import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Banner from '../components/Banner';
import Category from '../components/Category';
import Banner2 from '../components/Banner2';
import Faq from '../components/Faq';
import Banner3 from '../components/Banner3';

function Home() {
  return (
    <div className='Home'>
        <div className="landing">
            <Hero />
        </div>
        <Featured />
        <Banner />
        <Category />
        <Banner2 />
        <Faq />
        <Banner3 />
    </div>
  )
}

export default Home