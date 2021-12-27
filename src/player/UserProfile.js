import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { baseUrl } from '../utils/api';
import { avatar, ring } from '../utils/avatars-rings';
import { playerIsDom } from '../utils/playerIsDom';
import dom from '../images/avatars/dom.jpg';
import './UserProfile.css';

export default function UserProfile() {
  const [playerData, setPlayerData] = useState(null);

  const params = useParams();
  const playerId = params.playerId;

  useEffect(loadData, [playerId]);

  function loadData() {
    fetch(`${baseUrl}/players/${playerId}`)
      .then((res) => res.json())
      .then(setPlayerData)
      .catch((error) => {
        console.error(error);
      });
  }

  const isDom = playerIsDom(playerData?.Name);
  console.log(playerData);

  return (
    playerData && (
      <main className="player-info d-flex justify-content-center">
        <div className="card">
          <div className="ring-avatar">
            {!isDom && (
              <div className="ring">
                <img src={ring} alt="avatar ring" width={251} height={251} />
              </div>
            )}

            <div className="avatar">
              <img
                src={!isDom ? avatar : dom}
                alt="player avatar"
                width={251}
                height={251}
              />
            </div>
          </div>

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
          <div className="links">
            <Link
              to={{
                pathname: `/playerKills/${playerId}`,
                state: { name: playerData.Name },
              }}
            >
              Recent Kills
            </Link>
            <Link
              to={{
                pathname: `/playerDeaths/${playerId}`,
                state: { name: playerData.Name },
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
