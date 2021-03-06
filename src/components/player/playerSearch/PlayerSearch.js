import React, { useState } from 'react';
import PlayerId from '../playerId/PlayerId';
import Spinner from 'react-bootstrap/Spinner';
import { fetchWithTimeout } from '../../../utils/api';
import ErrorAlert from '../../layout/errors/ErrorAlert';
import { baseUrl } from '../../../utils/api';
import './PlayerSearch.css';

export default function Home() {
  const [userName, setUserName] = useState({
    name: '',
  });
  const [playerInfo, setPlayerInfo] = useState(null);
  const [playerInfoError, setPlayerInfoError] = useState(null);
  const [isLoading, setIsLoading] = useState();

  const handleNameChange = ({ target: { name, value } }) => {
    setUserName((previousUserName) => ({
      ...previousUserName,
      [name]: value,
    }));
  };

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setPlayerInfo(null);
      setPlayerInfoError(null);
      setIsLoading(true);
      const response = await fetchWithTimeout(
        `${baseUrl}/search?q=${userName.name}`
      );
      const playerData = await response.json();
      setPlayerInfo(playerData);
    } catch (error) {
      if (error.name === 'AbortError') {
        setPlayerInfoError(
          new Error(`The request has timed out. Please try again.`)
        );
      } else {
        setPlayerInfoError(error);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="search-content">
      <div className="form-header">
        <h3>Search for your Character</h3>
      </div>
      <form className="search-form" onSubmit={handleSubmit}>
        <label className="search-label" htmlFor="name">
          Name:
        </label>
        <input
          className="search-input"
          id="name"
          name="name"
          type="text"
          placeholder="ex. CynicalEntity"
          onChange={handleNameChange}
          value={userName.name}
          required={true}
        />
        <button className="search-button" type="submit">
          Search
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
