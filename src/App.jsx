import React, { Suspense } from 'react';
import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import "./App.css";

// Lazy-loaded components
const Home = React.lazy(() => import('./pages/Home'));
const Properties = React.lazy(() => import('./pages/Properties'));
const Blog = React.lazy(() => import('./pages/Blog'));

function App() {
  const [sidebar, setSidebar] = useState(false);

  const sidebarFunction = () => setSidebar(!sidebar);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar click={sidebarFunction} />
        <Sidebar effect={sidebar} click={sidebarFunction} />
        <Suspense fallback={<div className='loading'>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
