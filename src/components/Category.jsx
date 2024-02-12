import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/Category.css";
import "../styles/Featured.css";

function Category() {
    const [list, setList] = useState([
        {
            id: 0, 
            type: "Sale", 
            img: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "$ 360,000.00 USD",
            title: "Peak Perfection",
            desc: "San Francisco",
            info: ["5 beds", "2 bathrooms", "110 m2"]
        },
        {
            id: 1, 
            type: "Rent", 
            img: "https://images.unsplash.com/photo-1543071293-d91175a68672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "$ 20,000.00 USD",
            title: "Classic Charm",
            desc: "New York",
            info: ["2 beds", "1 bathrooms", "75 m2"]
        },
        {
            id: 2, 
            type: "Sale", 
            img: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "$ 130,000.00 USD",
            title: "Exotic Haven",
            desc: "Miami",
            info: ["3 beds", "1 bathrooms", "95 m2"]
        },
        {
            id: 3, 
            type: "Sale", 
            img: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "$ 210,000.00 USD",
            title: "Slope-side Luxury",
            desc: "Los Angeles",
            info: ["3 beds", "1 bathrooms", "75 m2"]
        },
        {
            id: 4, 
            type: "Rent", 
            img: "https://images.unsplash.com/photo-1469964062538-06fad433a132?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "$ 5,000.00 USD",
            title: "Tranquil Waters",
            desc: "San Francisco",
            info: ["1 beds", "1 bathrooms", "50 m2"]
        },
        {
            id: 5, 
            type: "Sale", 
            img: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "$ 100,000.00 USD",
            title: "Urban Chic",
            desc: "Los Angeles",
            info: ["2 beds", "2 bathrooms", "105 m2"]
        }
    ])
    
  return (
    <div className='Featured'>
        <center><p className="block-head">Find the category for you</p></center>
        <center><p className="block-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat purus suscipit turpis sed vitae.</p></center>
        <center>
            <div className="cat-above">
                <div className="categories">
                    <p>Residential</p>
                    <p>Commercial</p>
                    <p>Apartments</p>
                    <p>Office space</p>
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
                                <p className={`type hus ${house.type === 'Rent' ? 'rent' : ''}`}>{house.type}</p>
                            </div>
                            <div className="grid-text">
                                <div className="price-flex">
                                    <p className="price">{house.price}</p>
                                </div>
                                <p className="title">{house.title}</p>
                                <p className="grid-desc">{house.desc}</p>
                                <div className="info hus">
                                    {house.info.map((infoItem, index) => (
                                        <p key={index}>{infoItem}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
        <center><Link to="/properties" className='block-link-two hus'>Explore All Listings</Link></center>
    </div>
  )
}

export default Category