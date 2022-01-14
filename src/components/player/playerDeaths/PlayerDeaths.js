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
            className="death-link killer"
            to={{
              pathname: `/event/${death.EventId}`,
            }}
          >
            {death.Killer.Name}
          </Link>
        </td>
        <td className="victim">{separator(death.Victim.DeathFame)}</td>
        <td className="guild-name">{death.Killer.GuildName || 'none'}</td>
        <td className="alliance-name">{death.Killer.AllianceName || 'none'}</td>
        <td className="killer-ip">
          {Math.floor(death.Killer.AverageItemPower)}
        </td>
        <td className="victim-ip">
          {Math.floor(death.Victim.AverageItemPower)}
        </td>
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
        <h2>{playerName}'s Most Recent Deaths</h2>
      </div>

      <table className="deaths-content">
        <tr className="deaths-headers">
          <th>Killer</th>
          <th>Fame</th>
          <th className="guild-name">Guild</th>
          <th className="alliance-name">Alliance</th>
          <th className="killer-ip">Killer's IP</th>
          <th className="victim-ip">Victim's IP</th>
        </tr>
        {content}
      </table>
    </main>
  );
}
