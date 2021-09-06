import React from 'react';
import { Link } from 'react-router-dom';
import PlayerNotFound from './PlayerNotFound';

export default function PlayerId({ userName, playerInfo }) {
  if (playerInfo && playerInfo.players.length !== 0) {
    const playerId = playerInfo.players[0].Id;

    return (
      <div className="playerInfo mt-5 p-3 text-center bg-dark text-light">
        <h2>Success!</h2>
        <h3>Your Albion Online player id is: {playerId}</h3>
        <div>
          <Link
            to={{
              pathname: `/userProfile`,
              state: playerId,
            }}
          >
            View My Profile
          </Link>
        </div>
      </div>
    );
  } else {
    return <PlayerNotFound playerInfo={playerInfo} />;
  }
}
