import React from 'react';
import { Link } from 'react-router-dom';
import PlayerNotFound from '../../layout/notFound/PlayerNotFound';
import './PlayerId.css';

export default function PlayerId({ playerInfo }) {
  if (playerInfo && playerInfo.players.length !== 0) {
    const players = playerInfo.players;

    const playerLinks = players.map((player, index) => (
      <tr key={index} className="player-results">
        <td className="player-links">
          <Link to={{ pathname: `/userProfile/${player.Id}` }}>
            {player.Name}
          </Link>
        </td>
        <td className="player-guild">{player.GuildName || 'no guild'}</td>
      </tr>
    ));

    return (
      <>
        <hr className="search-separator" />

        <div className="search-results">
          <table className="results-table">
            <tbody>
              <tr className="results-headers">
                <th>Name</th>
                <th>Guild</th>
              </tr>
              {playerLinks}
            </tbody>
          </table>
        </div>
      </>
    );
  } else {
    return <PlayerNotFound playerInfo={playerInfo} />;
  }
}
