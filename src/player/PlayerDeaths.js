import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PlayerDeaths() {
  const [deathData, setDeathData] = useState(null);
  const location = useLocation();
  const playerId = location.state.playerId;
  const name = location.state.name;
  console.log(deathData);

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
        <div className="col-2">
          <p>{death.Killer.Name}</p>
        </div>
        <div className="col-2">
          <p>{death.Killer.GuildName}</p>
        </div>
        <div className="col-2">
          <p>{death.Killer.AllianceName}</p>
        </div>
        <div className="col-2">
          <p>{death.Victim.DeathFame}</p>
        </div>
        <div className="col-2">
          <p>{Math.floor(death.Killer.AverageItemPower)}</p>
        </div>
        <div className="col-2">
          <p>{Math.floor(death.Victim.AverageItemPower)}</p>
        </div>
      </div>
    ));
  }

  return (
    <main className="d-flex flex-column ms-4">
      <div className="text-center mb-3">
        <h1>{name}'s Most Recent Deaths</h1>
      </div>

      <div className="headers row">
        <h4 className="col-2">Killed By</h4>
        <h4 className="col-2">Guild</h4>
        <h4 className="col-2">Alliance</h4>
        <h4 className="col-2">Death Fame</h4>
        <h4 className="col-2">Killer's Avg IP</h4>
        <h4 className="col-2">Victim's IP</h4>
      </div>
      <hr />
      <div className="row">{content}</div>
    </main>
  );
}
