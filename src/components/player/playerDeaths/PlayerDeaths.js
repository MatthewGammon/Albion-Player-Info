import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { baseUrl } from '../../../utils/api';
import { separator } from '../../../utils/numbers';
import './PlayerDeaths.css';
import ErrorAlert from '../../layout/errors/ErrorAlert';

export default function PlayerDeaths() {
  const [deathsData, setDeathsData] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const [deathsError, setDeathsError] = useState(null);

  const { playerId, playerName } = useParams();

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetch(`${baseUrl}/players/${playerId}/deaths`);
        const deathsData = await response.json();
        setDeathsData(deathsData);
      } catch (error) {
        setDeathsError(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, [playerId]);

  let content;
  if (deathsData) {
    content = deathsData.map((death, index) => (
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
        <td className="victim-fame">{separator(death.Victim.DeathFame)}</td>
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
      <div className="player-deaths-header">
        <h2>{playerName}'s Most Recent Deaths</h2>
      </div>
      {isLoading ? (
        <div className="loading-deaths">
          <h2>Loading</h2>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : deathsData ? (
        <table className="deaths-content">
          <tbody>
            <tr className="deaths-headers">
              <th>Killer</th>
              <th>Fame</th>
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
          <ErrorAlert error={deathsError} />
        </div>
      )}
    </main>
  );
}
