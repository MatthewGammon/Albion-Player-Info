import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { baseUrl } from '../../../utils/api';
import { separator } from '../../../utils/numbers';
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
      <tr key={index} className="death-info">
        <td>
          <Link
            className="death-link"
            to={{
              pathname: `/event/${death.EventId}`,
            }}
          >
            {death.Killer.Name}
          </Link>
        </td>
        <td>{separator(death.Victim.DeathFame)}</td>
        <td>{death.Killer.GuildName || 'none'}</td>
        <td>{death.Killer.AllianceName || 'none'}</td>
        <td>{Math.floor(death.Killer.AverageItemPower)}</td>
        <td>{Math.floor(death.Victim.AverageItemPower)}</td>
      </tr>
    ));
  }

  return (
    <main className="recent-deaths">
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

      <table className="deaths-content">
        <tr className="deaths-headers">
          <th>Killer</th>
          <th>Death Fame</th>
          <th>Guild</th>
          <th>Alliance</th>
          <th>Killer's IP</th>
          <th>Victim's IP</th>
        </tr>
        {content}
      </table>
    </main>
  );
}
