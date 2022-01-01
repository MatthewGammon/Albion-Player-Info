import React from 'react';

export default function NotFound({ playerInfo }) {
  if (playerInfo && playerInfo.players.length === 0) {
    return (
      <div className="text-center bg-dark text-warning mt-4 p-2 rounded">
        <h2 className="m-2 p-1">Character not found!</h2>
        <p>Please check your spelling and try again.</p>
      </div>
    );
  } else {
    return null;
  }
}
