import { React, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './UserProfile.css';

export default function UserProfile() {
  const [playerData, setPlayerData] = useState(null);
  const location = useLocation();
  const playerId = location.state;

  useEffect(loadData, [playerId]);

  function loadData() {
    fetch(`/players/${playerId}`)
      .then((res) => res.json())
      .then(setPlayerData);
  }

  return (
    playerData && (
      <main className="player-info d-flex justify-content-center">
        <div className="card">
          <img
            src="https://i.imgur.com/4YKxVQj.png"
            className="card-img-top"
            alt="albion male character"
          />
          <div className="card-body">
            <h3 className="card-title">Player: {playerData.Name}</h3>
            <h5 className="card-text">Guild: {playerData.GuildName}</h5>
            <h5 className="card-text">Alliance: {playerData.AllianceName}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Kill Fame: {playerData.KillFame}
            </li>
            <li className="list-group-item">
              Death Fame: {playerData.DeathFame}
            </li>
            <li className="list-group-item">
              Fame Ratio: {playerData.FameRatio}
            </li>
          </ul>
          <div className="card-body">
            <Link
              to={{
                pathname: '/playerDeaths',
                state: playerId,
              }}
            >
              Recent Deaths
            </Link>
          </div>
        </div>
      </main>
    )
  );
}
