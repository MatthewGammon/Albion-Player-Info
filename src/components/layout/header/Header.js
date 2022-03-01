import React from 'react';

import CharacterSelect from '../characterSelect/CharacterSelect';
import './Header.css';

function Header() {
  function displayMenu() {
    const element = document.getElementById('myTopnav');

    if (element.className === 'topnav') {
      element.className += ' responsive';
    } else {
      element.className = 'topnav';
    }
  }

  return (
    <>
      <div className="topnav" id="myTopnav">
        <a href="/" className="active">
          Home
        </a>
        <a href="/search">Search</a>
        <a href="/about">About</a>
        <div className="character-select">
          <CharacterSelect />
        </div>

        <button className="icon" onClick={() => displayMenu()}>
          <i className="fa fa-bars"></i>
        </button>
      </div>

      <div className="header">
        <div className="header-text">
          <h1 className="header-primary">
            Albion Online Player Info and Regear
          </h1>
          <p className="header-lead">
            See your stats and submit regear requests!
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
