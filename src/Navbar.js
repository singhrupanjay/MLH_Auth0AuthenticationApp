// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './components/loginButton';
import LogoutButton from './components/logoutButton';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
  const { isAuthenticated } = useAuth0();
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
        {!isAuthenticated && (
          <>
            <LoginButton />
          </>
        )}

        {isAuthenticated && (
          <>
            <LogoutButton />
          </>
        )}

      </ul>
    </nav>
  );
}

export default Navbar;
