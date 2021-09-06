import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PlayerDeaths() {
  const [deathData, setDeathData] = useState(null);
  const location = useLocation();
  const playerId = location.state;

  useEffect(loadData, [playerId]);

  function loadData() {
    fetch(`/players/${playerId}/deaths`)
      .then((res) => res.json())
      .then(setDeathData);
  }

  let content;
  if (deathData) {
    content = deathData.map((death, index) => (
      <div key={index} className="d-flex">
        <div className="col-3">
          <p>{death.Killer.Name}</p>
        </div>
        <div className="col-3">
          <p>{death.Killer.GuildName}</p>
        </div>
        <div className="col-3">
          <p>{death.numberOfParticipants}</p>
        </div>
      </div>
    ));
  }

  return (
    <main className="d-flex flex-column ms-4">
      <div className="headers row">
        <h4 className="col-3">Killer Name</h4>
        <h4 className="col-3">Killer's Guild</h4>
        <h4 className="col-3">Number of Participants</h4>
      </div>
      <div className="row">{content}</div>
    </main>
  );
}
