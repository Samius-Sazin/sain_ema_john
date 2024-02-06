import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className='logo'>
                <img
                    src={logo}
                    alt="emajohnlogo"
                />
            </div>

            <nav className='header-anchor'>
                <NavLink to='/shop'>Shop</NavLink>
                <NavLink to='/review'>Order Review</NavLink>
                <NavLink to='/inventory'>Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;