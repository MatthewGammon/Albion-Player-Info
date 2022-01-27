import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { baseUrl } from '../../../utils/api';
import { avatars, rings } from '../../../utils/avatars-rings';
import { playerIsDom } from '../../../utils/playerIsDom';
import dom from '../../../../src/assets/images/avatars/dom.jpg';
import { separator, generateIndex } from '../../../utils/numbers';
import './UserProfile.css';
import ErrorAlert from '../../layout/errors/ErrorAlert';

export default function UserProfile() {
  const [playerData, setPlayerData] = useState(null);
  const [profileError, setProfileError] = useState(null);

  const { playerId } = useParams();

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(`${baseUrl}/players/${playerId}`);
        const playerData = await response.json();
        setPlayerData(playerData);
      } catch (error) {
        setProfileError(error);
      }
    }

    loadData();
  }, [playerId]);

  const avatar = avatars[generateIndex(avatars)];
  const ring = rings[generateIndex(rings)];

  const isDom = playerIsDom(playerData?.Name);

  let killFame, deathFame;
  if (playerData) {
    killFame = separator(playerData.KillFame);
    deathFame = separator(playerData.DeathFame);
  }

  return playerData ? (
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
  ) : (
    <div className="error-alert">
      <ErrorAlert error={profileError} />
    </div>
  );
}
