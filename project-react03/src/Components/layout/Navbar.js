import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='Logo'>
      <div>
        <img src="/logo.png" alt="Costs" />
      </div>
      <nav className='Links'>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">Company</Link>
        <Link to="/newproject">New Project</Link>
      </nav>
    </div>
  );
}

export default Navbar;

