import React, { useState, useEffect } from 'react';
import NotFound from '../layout/NotFound';

export default function PlayerId({ playerInfo }) {
  if (playerInfo && playerInfo.players.length !== 0) {
    return (
      <div className="playerInfo mt-3 text-center bg-dark text-light">
        <h2>Success!</h2>
        <h3>Your Albion Online player id is: {playerInfo.players[0].Id}</h3>
        <a
          href={`https://gameinfo.albiononline.com/api/gameinfo/players/${playerInfo.players[0].Id}`}
        >
          Click Me!
        </a>
      </div>
    );
  } else {
    return <NotFound playerInfo={playerInfo} />;
  }
}
