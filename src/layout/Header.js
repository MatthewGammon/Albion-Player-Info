import React from 'react';

const style = {
  backgroundColor: 'black',
  backgroundPosition: 'center',
  backgroundSize: '100% auto',
};

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid text-white mb-0" style={style}>
      <div className="container">
        <h1 className="display-1 text-center">
          Conflict Member Info and Regear
        </h1>
        <p className="lead text-center">
          See your stats and submit regear requests!
        </p>
      </div>
    </div>
  );
}

export default Header;
