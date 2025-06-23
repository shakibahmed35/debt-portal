import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className='navbar'>
            <h2 className='logo'>Superlative RM</h2>
            <ul className='nav-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/submit-account">Submit Account</Link></li>
                <li><Link to="/upload-documents">Upload Documents</Link></li>
                <li><Link to="/contracts">Contracts</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;