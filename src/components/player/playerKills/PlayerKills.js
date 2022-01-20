import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import './PlayerKills.css';
import { baseUrl } from '../../../utils/api';
import { separator } from '../../../utils/numbers';

export default function PlayerKills() {
  const [killsData, setKillsData] = useState(null);
  const [isLoading, setIsLoading] = useState();

  const { playerId, playerName } = useParams();

  useEffect(loadData, [playerId]);

  function loadData() {
    setIsLoading(true);
    const abortController = new AbortController();
    fetch(`${baseUrl}/players/${playerId}/kills`, abortController.signal)
      .then((res) => res.json())
      .then(setKillsData)
      .then(() => setIsLoading(false));
    return () => abortController.abort();
  }

  let content;
  if (killsData) {
    content = killsData.map((kill, index) => (
      <tr key={index} className="kill-info">
        <td>
          <Link
            className="kill-link"
            to={{
              pathname: `/event/${kill.EventId}`,
            }}
          >
            {kill.Victim.Name}
          </Link>
        </td>
        <td className="killer-fame">{separator(kill.TotalVictimKillFame)}</td>
        <td className="guild-name">{kill.Victim.GuildName || 'none'}</td>
        <td className="alliance-name">{kill.Victim.AllianceName || 'none'}</td>
        <td className="killer-ip">
          {Math.floor(kill.Killer.AverageItemPower)}
        </td>
        <td className="victim-ip">
          {Math.floor(kill.Victim.AverageItemPower)}
        </td>
      </tr>
    ));
  }

  return (
    <main className="recent-kills">
      {isLoading ? (
        <div className="loading-kills">
          <h2>Loading</h2>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        ''
      )}
      <div className="player-kills-header">
        <h1>{playerName}'s Most Recent Kills</h1>
      </div>

      <table className="kills-content">
        <tr className="kills-headers">
          <th>Victim</th>
          <th>Kill Fame</th>
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
