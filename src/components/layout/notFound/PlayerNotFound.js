import React from 'react';

export default function NotFound({ playerInfo }) {
  if (playerInfo && playerInfo.players.length === 0) {
    return (
      <div className="m-1">
        <h4>Character not found!</h4>
        <p>Please check your spelling and try again.</p>
      </div>
    );
  } else {
    return null;
  }
}
