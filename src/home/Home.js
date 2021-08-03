import React, { useState } from 'react';
import PlayerId from '../player/PlayerId';

export default function Home() {
  const [userName, setUserName] = useState('');
  const [playerInfo, setPlayerInfo] = useState(null);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setPlayerInfo(null);
    handleClick();
    setUserName('');
  };

  const handleClick = () => {
    fetch(`/search?q=${userName}`)
      .then((res) => res.json())
      .then(setPlayerInfo);
  };

  return (
    <main className="form d-flex flex-column align-items-center">
      <h1>Enter Your Character's Name</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          className="m-3"
          id="name"
          name="name"
          type="text"
          placeholder="ex. CynicalEntity"
          onChange={handleNameChange}
          value={userName}
          required={true}
        />
      </form>
      <button className="btn-btn-primary" type="submit" onClick={handleClick}>
        Submit
      </button>
      <h3 className="m-2">
        Please be patient as this may take some time to load from the Albion
        API. Thank you.
      </h3>
      <PlayerId playerInfo={playerInfo} userName={userName} />
    </main>
  );
}
