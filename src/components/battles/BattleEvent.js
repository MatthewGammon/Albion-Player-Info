import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../utils/api';
import { separator } from '../../utils/numbers';
import PlayerGear from '../player/playerGear/PlayerGear';
import './BattleEvent.css';

export default function BattleEvent() {
  const [killData, setKillData] = useState(null);

  const { eventId } = useParams();

  useEffect(loadKill, [eventId]);

  function loadKill() {
    fetch(`${baseUrl}/events/${eventId}`)
      .then((res) => res.json())
      .then(setKillData);
  }

  let killer, victim, killDate;

  if (killData) {
    killer = killData.Killer.Name;
    victim = killData.Victim.Name;

    killDate = new Date(killData.TimeStamp).toUTCString().slice(0, 22) + ' UTC';
  }

  return (
    <>
      {killData ? (
        <div className="event">
          <div className="killer-info">
            <h4>
              {killer} [{killData.Killer.GuildName}]
            </h4>
            <h4>{Math.floor(killData.Killer.AverageItemPower)}</h4>
            <PlayerGear player={killData.Killer} />
          </div>

          <div className="event-info">
            <h4>Battle Info:</h4>
            <p>
              <b>{killDate}</b>
            </p>
            <p>Kill Fame: {separator(killData.TotalVictimKillFame)}</p>
            <p>Individual Fame Gain: {separator(killData.Killer.KillFame)}</p>
            <p>Regear Id: {killData.EventId}</p>
            <p>{killData.KillArea.split('_').join(' ')}</p>
          </div>

          <div className="victim-info">
            <h4>
              {victim} [{killData.Victim.GuildName}]
            </h4>
            <h4>{Math.floor(killData.Victim.AverageItemPower)}</h4>

            <PlayerGear player={killData.Victim} />
          </div>
        </div>
      ) : null}
    </>
  );
}
