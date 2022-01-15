import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
      {' '}
      <div className="header">
        <h1 className="header-text">Albion Online Player Info and Regear</h1>
        <p className="header-lead">
          See your stats and submit regear requests!
        </p>
      </div>
      <nav className="navbar">
        <Link className="nav-link" to="/home">
          Home
        </Link>

        <Link className="nav-link" to="/playerSearch">
          Search
        </Link>
      </nav>
    </>
  );
}

export default Header;
