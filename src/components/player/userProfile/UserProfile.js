import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { baseUrl } from '../../../utils/api';
import { avatars, rings } from '../../../utils/avatars-rings';
import { playerIsDom } from '../../../utils/playerIsDom';
import dom from '../../../../src/assets/images/avatars/dom.jpg';
import separator from '../../../utils/numbers';
import './UserProfile.css';

export default function UserProfile() {
  const [playerData, setPlayerData] = useState(null);

  const { playerId } = useParams();

  useEffect(loadData, [playerId]);

  function loadData() {
    fetch(`${baseUrl}/players/${playerId}`)
      .then((res) => res.json())
      .then(setPlayerData)
      .catch((error) => {
        console.error(error);
      });
  }

  const avatarIndex = Math.floor(Math.random() * avatars.length);
  const avatar = avatars[avatarIndex];

  const ringIndex = Math.floor(Math.random() * rings.length);
  const ring = rings[ringIndex];

  const isDom = playerIsDom(playerData?.Name);

  let killFame, deathFame;
  if (playerData) {
    killFame = separator(playerData.KillFame);
    deathFame = separator(playerData.DeathFame);
  }

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
            <h3 className="card-title">{playerData.Name}</h3>
            <h5 className="card-text">Guild: {playerData.GuildName}</h5>
            <h5 className="card-text">Alliance: {playerData.AllianceName}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Kill Fame: {killFame}</li>
            <li className="list-group-item">Death Fame: {deathFame}</li>
            <li className="list-group-item">
              Fame Ratio: {playerData.FameRatio}
            </li>
          </ul>
          <div className="links">
            <Link
              to={{
                pathname: `/playerKills/${playerData.Name}/${playerId}`,
              }}
            >
              Recent Kills
            </Link>
            <Link
              to={{
                pathname: `/playerDeaths/${playerData.Name}/${playerId}`,
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
