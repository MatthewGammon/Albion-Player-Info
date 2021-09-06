import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/playerSearch');
  };

  return (
    <div className="form d-flex flex-column align-items-center bg-dark text-light p-3">
      <div className="text-center">
        <h2>Welcome to Conflict's proprietary regear system!</h2>
        <p>This application is still a work in progress.</p>
        <p>
          Feel free to poke around. There is some base functionality for viewing
          player data, but the regear system is not yet implemented.
        </p>
        <p>Styling will come after all functionality is in place.</p>
      </div>
      <button className="btn btn-primary" type="button" onClick={handleClick}>
        Search For Your Character
      </button>
    </div>
  );
}
