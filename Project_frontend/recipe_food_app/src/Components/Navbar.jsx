import React, { useState } from 'react';
import './Navbar.css';
// import localImage from './images/Fazu pic.jpg';
import { Link } from 'react-router-dom';
import LandingPage from './LandingPage';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
        <nav className="navbar">
            <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!isMenuOpen)}>
                &#9776;
            </div>
            <div className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
               <Link to="/"> <h5 onClick={closeMenu}>Home</h5></Link>
               <Link to={"/recipe"}>  <h5 onClick={closeMenu}>Recipes</h5></Link>
               
                <h5 onClick={closeMenu}>Ingredients</h5>
                <h5 onClick={closeMenu}>Categories</h5>
                <h5 onClick={closeMenu}>Contact Us</h5>
                <div>
        <Link to={"/signin"}>
            <button onClick={closeMenu} className="signup-button">SignUp</button>
        </Link>
        </div>
            </div>
        </nav>
     
        </>
    );
}

export default Navbar;
