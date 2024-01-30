import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

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
                <a href='/shop'>Shop</a>
                <a href='/order'>Order Review</a>
                <a href='/inventory'>Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;