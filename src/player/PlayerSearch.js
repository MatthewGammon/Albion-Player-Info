import React, { useState } from 'react';
import PlayerId from './PlayerId';

export default function Home() {
  const [userName, setUserName] = useState({
    name: '',
  });
  const [playerInfo, setPlayerInfo] = useState(null);
  const [playerInfoError, setPlayerInfoError] = useState(null);

  const handleNameChange = ({ target: { name, value } }) => {
    setUserName((previousUserName) => ({
      ...previousUserName,
      [name]: value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setPlayerInfoError(null);
    fetch(`/search?q=${userName.name}`)
      .then((res) => res.json())
      .then(setPlayerInfo)
      .catch(playerInfoError);
  };

  return (
    <main
      className="form d-flex flex-column align-items-center  p-3 bg-dark text-light"
      style={{ backgroundColor: 'white' }}
    >
      <h1>Enter Your Character's Name</h1>
      <form onSubmit={submitHandler}>
        <label className="mt-4" htmlFor="name">
          Name:
        </label>
        <input
          className="m-2"
          id="name"
          name="name"
          type="text"
          placeholder="ex. CynicalEntity"
          onChange={handleNameChange}
          value={userName.name}
          required={true}
        />
        <button className="btn-primary" type="submit">
          Submit
        </button>
      </form>

      <h3 className="mt-3">
        Please be patient as this may take some time to load from the Albion
        API. Thank you.
      </h3>

      <PlayerId playerInfo={playerInfo} />
    </main>
  );
}
