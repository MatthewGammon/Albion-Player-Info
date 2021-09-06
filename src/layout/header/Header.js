import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();
  const goBack = history.goBack();
  return (
    <div className="header text-light text-center">
      <div className="container">
        <h1 className="display-1">Conflict Member Info and Regear</h1>
        <p className="lead">See your stats and submit regear requests!</p>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div>
            <Link to="/home">Home</Link>
          </div>
          <div className="ms-2">
            <Link to="/playerSearch">Search</Link>
          </div>
          <div class="collapse navbar-collapse" id="navbarNav"></div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
