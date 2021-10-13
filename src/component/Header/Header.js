import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, handleLogout } = useAuth();
    return (
        <div>
            <div className="header-items">
                <Link to="/home">Home</Link>
                <Link to="/book">Booking</Link>
                <Link to="/order">Order</Link>
                <Link to="/about">About</Link>
                {user.displayName && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                {
                    user.email ?
                        <button onClick={handleLogout}>Sign Out</button>
                        : <Link to="/login">LogIn</Link>
                }
            </div>
        </div>
    );
};

export default Header;