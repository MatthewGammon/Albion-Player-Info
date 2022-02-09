import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import './PlayerKills.css';
import { baseUrl } from '../../../utils/api';
import { separator } from '../../../utils/numbers';
import ErrorAlert from '../../layout/errors/ErrorAlert';

export default function PlayerKills() {
  const [killsData, setKillsData] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const [killsError, setKillsError] = useState(null);

  const { playerId, playerName } = useParams();

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetch(`${baseUrl}/players/${playerId}/kills`);
        const killsData = await response.json();
        setKillsData(killsData);
      } catch (error) {
        setKillsError(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, [playerId]);

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
      <div className="player-kills-header">
        <h3>{playerName}'s Most Recent Kills</h3>
      </div>
      {isLoading ? (
        <div className="loading-kills">
          <h2>Loading</h2>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : killsData ? (
        <table className="kills-content">
          <tbody>
            <tr className="kills-headers">
              <th>Victim</th>
              <th>Kill Fame</th>
              <th className="guild-name">Guild</th>
              <th className="alliance-name">Alliance</th>
              <th className="killer-ip">Killer's IP</th>
              <th className="victim-ip">Victim's IP</th>
            </tr>
            {content}
          </tbody>
        </table>
      ) : (
        <div className="error-alert">
          <ErrorAlert error={killsError} />
        </div>
      )}
    </main>
  );
}
