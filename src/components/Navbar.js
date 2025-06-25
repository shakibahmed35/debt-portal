import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h2>Superlative RM</h2>
      {user ? (
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/submit-account">Submit Account</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          {user.role === 'admin' && (
            <>
              <li><Link to="/contracts">Contracts</Link></li>
              {/* Add Admin tools here if needed */}
            </>
          )}
          <li><button onClick={logout}>Logout</button></li>
        </ul>
      ) : (
        <ul className="nav-links">
          <li><Link to="/login">Login</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
