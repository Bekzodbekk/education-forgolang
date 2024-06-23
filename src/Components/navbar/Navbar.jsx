import React, { useState } from 'react'
import "./navbar.scss"

const Navbar = () => {
    const [bar, setBar] = useState(false)
    const BarToggle = () => {
        setBar(!bar)
    }
    return (
        <div className='navbar container'>
            <div className="nav-logo">
                <h1 className='logo'>Education</h1>
            </div>
            <ul className='nav-menu' style={bar ? {right: "0"} : {color: "-100%"}}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Page</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="nav-btns">
                <button className='in'>Sign in</button>
                <button className='out'>Sign Up</button>
                <i onClick={() => BarToggle()} style={bar ? {color: "#fff"} : {color: "#333"}} className="fa-solid fa-bars"></i>
            </div>
        </div>
    )
}

export default Navbar