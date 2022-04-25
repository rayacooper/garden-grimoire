import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <img src="#" alt="Logo" id=""/>

            <ul className='nav-container__links'>
                <li>
                    <a>Home</a>
                </li>

                <li>
                    <a>About</a>
                </li>

            </ul>

            <div>Search Bar</div>

            <div className='nav-container__hamburger-menu'>
                <div className="nav-container__hamburger-menu--bar"></div>
                <div className="nav-container__hamburger-menu--bar"></div>
                <div className="nav-container__hamburger-menu--bar"></div>
            </div>
            
        </div>
    );
};

export default Navbar;