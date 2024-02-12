import React from 'react';
import { useState } from 'react';
import "../App.css";
import "../styles/Navbar.css";
import "../styles/Category.css";
import "../styles/Featured.css";

function Blog() {
  const [list, setList] = useState([
      {
          id: 0, 
          img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          date: "June 6, 2023",
          title: "Expert Insights: Consultation and Legal Support for Foreign",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh pretium nunc mauris sed"
      },
      {
          id: 1, 
          img: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          date: "June 6, 2023",
          title: "Inheritance Laws and Foreign Ownership: Planning for the",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh pretium nunc mauris sed"
      },
      {
          id: 2, 
          img: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          date: "June 6, 2023",
          title: "Tax Implications for Foreign Buyers: Exploring the Financial",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh pretium nunc mauris sed"
      },
      {
          id: 3, 
          img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          date: "June 6, 2023",
          title: "Unlocking Investment Opportunities: Meeting",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh pretium nunc mauris sed"
      },
      {
          id: 4, 
          img: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          date: "June 6, 2023",
          title: "Understanding Property Restrictions: What Foreign",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh pretium nunc mauris sed"
      },
      {
          id: 5, 
          img: "https://images.unsplash.com/photo-1629584603667-e8ad7c8feb0b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          date: "June 6, 2023",
          title: "Navigating Legal Requirements: A Guide for",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh pretium nunc mauris sed"
      }
  ])
  return (
    <div className='Page'>
      <center><p className="block-head">Resources and insights</p></center>
      <center><p className="block-desc">The latest industry news, interviews, technologies, and resources.</p></center>
      <center>
        <div className="cat-above">
          <div className="categories">
            <p>All</p>
            <p>Buying</p>
            <p>Selling</p>
            <p>Renting</p>
            <p>Mortgage</p>
          </div>
        </div>
      </center>
      <div className="auto">
        <div className="objects">
                {list.map((house) => (
                    <a href="#" key={house.id}>
                        <div className="house">
                            <div className="house-img">
                                <img src={house.img} alt="house" />
                            </div>
                            <div className="grid-text">
                                <p className="date">{house.date}</p>
                                <p className="blog-title">{house.title}</p>
                                <p className="blog-desc">{house.desc}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
      </div>
    </div>
  )
}

export default Blog