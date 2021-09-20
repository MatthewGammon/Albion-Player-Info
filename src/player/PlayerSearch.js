import React, { useState } from 'react';
import PlayerId from './PlayerId';
import Spinner from 'react-bootstrap/Spinner';
import { fetchWithTimeout } from '../../src/utils/api';
import ErrorAlert from '../layout/errors/ErrorAlert';

export default function Home() {
  const [userName, setUserName] = useState({
    name: '',
  });
  const [playerInfo, setPlayerInfo] = useState(null);
  const [playerInfoError, setPlayerInfoError] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const url = process.env.REACT_APP_BASE_URL;

  const handleNameChange = ({ target: { name, value } }) => {
    setUserName((previousUserName) => ({
      ...previousUserName,
      [name]: value,
    }));
  };

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setPlayerInfoError(null);
      setIsLoading(true);
      const response = await fetchWithTimeout(
        `${url}/search?q=${userName.name}`
      );
      const playerData = await response.json();
      setPlayerInfo(playerData);
      setIsLoading(false);
    } catch (error) {
      setPlayerInfoError(error);
      setIsLoading(false);
    }
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const abortController = new AbortController();
  //   setPlayerInfoError(null);
  //   setIsLoading(true);
  //   console.log(isLoading);
  //   fetch(`/search?q=${userName.name}`, abortController.signal)
  //     .then((res) => res.json())
  //     .then(setPlayerInfo)
  //     .then(() => setIsLoading(false))
  //     .catch(playerInfoError);
  //   return () => abortController.abort();
  // };

  return (
    <main
      className="form d-flex flex-column align-items-center  p-3 bg-dark text-light"
      style={{ backgroundColor: 'white' }}
    >
      <h1>Enter Your Character's Name</h1>
      <form onSubmit={handleSubmit}>
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

      <div className="error-alert">
        <ErrorAlert error={playerInfoError} />
      </div>

      {isLoading ? (
        <div className="loading text-center">
          {' '}
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>{' '}
          <p>
            Please be patient as this may take some time to load from the Albion
            API. Thank you.
          </p>{' '}
        </div>
      ) : (
        ''
      )}

      <PlayerId playerInfo={playerInfo} />
    </main>
  );
}
