import React from 'react';
import {Link}  from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
        <Link to="/" className="navlink">
            About
        </Link>
        <Link to="/portfolio" className="navlink">
            Portfolio
        </Link>
        <Link to="/contact" className="navlink">
            Contact
        </Link>
        </>
    )
} 

export default Navbar
