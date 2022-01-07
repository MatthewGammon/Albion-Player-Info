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

  console.log(killsData);
  let content;
  if (killsData) {
    content = killsData.map((kill, index) => (
      <div key={index} className="kill d-flex">
        <div className="victim-name col mb-2">
          <p>{kill.Victim.Name}</p>
          <Link
            className="event-link"
            to={{
              pathname: `/event/${kill.BattleId}`,
              state: { killData: kill },
            }}
          >
            View Battle
          </Link>
        </div>
        <div className="col">
          <p>{kill.Victim.GuildName || 'none'}</p>
        </div>
        <div className="col">
          <p>{kill.Victim.AllianceName || 'none'}</p>
        </div>
        <div className="col">
          <p>{separator(kill.TotalVictimKillFame)}</p>
        </div>
        <div className="col">
          <p>{Math.floor(kill.Killer.AverageItemPower)}</p>
        </div>
        <div className="col">
          <p>{Math.floor(kill.Victim.AverageItemPower)}</p>
        </div>
      </div>
    ));
  }

  return (
    <main className="d-flex flex-column ms-4 me-4">
      <div className="text-center">
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
        <div className="player-kills-header">
          <h1>{playerName}'s Most Recent Kills</h1>
        </div>
      </div>

      <div className="headers row">
        <h4 className="col">Victim</h4>
        <h4 className="col">Guild</h4>
        <h4 className="col">Alliance</h4>
        <h4 className="col">Kill Fame</h4>
        <h4 className="col">Killer's IP</h4>
        <h4 className="col">Victim's IP</h4>
      </div>
      <hr />
      <div className="battles-content">{content}</div>
    </main>
  );
}
