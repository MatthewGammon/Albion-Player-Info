import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/search');
  };

  return (
    <div className="app-disclaimer">
      <div className="disclaimer-text">
        <h3 className="disclaimer-header">
          Thanks for visiting Albion Player Info and Regear!
        </h3>
        <p>
          Feel free to poke around and check out the currently available
          features. <br />
          This app is still in development and you will find that not all
          features have been completed or implemented.
        </p>
        <p>Please feel free to reach out with any feedback or suggestions!</p>

        <button className="search-button" type="button" onClick={handleClick}>
          Search For Your Character
        </button>
      </div>
    </div>
  );
}
