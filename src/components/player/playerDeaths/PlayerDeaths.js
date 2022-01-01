import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { baseUrl } from '../../../utils/api';
import './PlayerDeaths.css';

export default function PlayerDeaths() {
  const [deathData, setDeathData] = useState(null);
  const [isLoading, setIsLoading] = useState();

  const { playerId, playerName } = useParams();

  useEffect(loadData, [playerId]);

  function loadData() {
    setIsLoading(true);
    fetch(`${baseUrl}/players/${playerId}/deaths`)
      .then((res) => res.json())
      .then(setDeathData)
      .then(() => setIsLoading(false));
  }

  let content;
  if (deathData) {
    content = deathData.map((death, index) => (
      <div key={index} className="death d-flex">
        <div className="col-2">
          <p>{death.Killer.Name}</p>
        </div>
        <div className="col-2">
          <p>{death.Killer.GuildName || 'none'}</p>
        </div>
        <div className="col-2">
          <p>{death.Killer.AllianceName || 'none'}</p>
        </div>
        <div className="col-2">
          <p>{death.Victim.DeathFame}</p>
        </div>
        <div className="col-2">
          <p>{Math.floor(death.Killer.AverageItemPower)}</p>
        </div>
        <div className="col-2">
          <p>{Math.floor(death.Victim.AverageItemPower)}</p>
        </div>
      </div>
    ));
  }

  return (
    <main className="d-flex flex-column ms-4">
      <div className="text-center mb-3">
        {isLoading ? (
          <div className="loading-deaths">
            <h2>Loading</h2>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          ''
        )}
        <div className="player-deaths-header">
          <h1>{playerName}'s Most Recent Deaths</h1>
        </div>
      </div>

      <div className="headers row">
        <h4 className="col-2">Killed By</h4>
        <h4 className="col-2">Guild</h4>
        <h4 className="col-2">Alliance</h4>
        <h4 className="col-2">Death Fame</h4>
        <h4 className="col-2">Killer's IP</h4>
        <h4 className="col-2">Victim's IP</h4>
      </div>
      <hr />
      <div className="row">{content}</div>
    </main>
  );
}
