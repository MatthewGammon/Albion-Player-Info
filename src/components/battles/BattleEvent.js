import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../utils/api';
import { separator } from '../../utils/numbers';
import PlayerGear from '../player/playerGear/PlayerGear';
import './BattleEvent.css';

export default function BattleEvent() {
  const [killData, setKillData] = useState(null);
  const [gearSprites, setGearSprites] = useState([]);
  const { eventId } = useParams();

  useEffect(loadKill, [eventId]);

  function loadKill() {
    fetch(`${baseUrl}/events/${eventId}`)
      .then((res) => res.json())
      .then(setKillData);
  }

  let killer, killerGear, victim, victimGear, killDate;

  if (killData) {
    killer = killData.Killer.Name;
    killerGear = killData.Killer.Equipment;
    victim = killData.Victim.Name;
    victimGear = killData.Victim.Equipment;

    killDate = new Date(killData.TimeStamp).toDateString();
  }

  return (
    <>
      {killData ? (
        <div className="event">
          <div className="killer-info">
            <h4>{killer}</h4>
            <h6>{killData.Killer.GuildName}</h6>
            <PlayerGear player={killData.Killer} />
          </div>

          <div className="center-column">
            <div className="kill-or-killed">
              <h4>KILLED</h4>
            </div>
            <div className="event-info">
              <p>Kill Fame: {separator(killData.TotalVictimKillFame)}</p>
              <p>Individual Fame Gain: {separator(killData.Killer.KillFame)}</p>
              <p>Date: {killDate}</p>
              <p>Event Id: {killData.BattleId}</p>
              <p>Location: {killData.KillArea.split('_').join(' ')}</p>
            </div>
          </div>

          <div className="victim-info">
            <h4>{victim}</h4>
            <h6>{killData.Victim.GuildName}</h6>

            <PlayerGear player={killData.Victim} />
          </div>
        </div>
      ) : null}
    </>
  );
}
