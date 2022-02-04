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

        <a className="icon" onClick={() => displayMenu()}>
          <i className="fa fa-bars"></i>
        </a>
      </div>

      <div className="header">
        <h1 className="header-text">Albion Online Player Info and Regear</h1>
        <p className="header-lead">
          See your stats and submit regear requests!
        </p>
      </div>
    </>
  );
}

export default Header;
