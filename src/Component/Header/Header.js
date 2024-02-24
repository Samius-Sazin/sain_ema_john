import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();

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
                {
                    user?.email ?
                    <button onClick={logOut} className='logout'>Logout ({user.displayName.substring(0, user.displayName.indexOf(' '))})</button> :
                    <NavLink to='/login'>Login</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;