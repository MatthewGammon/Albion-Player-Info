import React from 'react';
import { Link } from 'react-router-dom';
import CharacterSelect from '../characterSelect/CharacterSelect';
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
        <div className="navbar-links">
          <Link className="nav-link" to="/home">
            Home
          </Link>
          <Link className="nav-link" to="/playerSearch">
            Search
          </Link>
        </div>
        <CharacterSelect />
      </nav>
    </>
  );
}

export default Header;
