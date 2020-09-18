import React from 'react';
import './NavBar.css';
import logo from '../../Logo.png'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className="navigation">
            <nav>
                <div className="logo">
                    <Link to="/home"><img src={logo} alt=""/></Link>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search Your Destination"/>
                </div>
                <div className="menu">
                    <ul>
                        <li>News</li>
                        <li>Destination</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Login</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;