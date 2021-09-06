import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home1() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/playerSearch');
  };
  return (
    <>
      <main
        className="form d-flex flex-column align-items-center  p-3"
        style={{ backgroundColor: 'white' }}
      >
        <h1>Look at me. I am the home page now.</h1>
        <h2>Nothing else fucking works.</h2>
        <button type="button" onClick={handleClick}>
          Search For Your Character
        </button>
      </main>
    </>
  );
}
