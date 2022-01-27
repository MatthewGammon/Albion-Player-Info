import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../utils/api';
import { separator } from '../../utils/numbers';
import PlayerGear from '../player/playerGear/PlayerGear';
import './BattleEvent.css';
import ErrorAlert from '../layout/errors/ErrorAlert';

export default function BattleEvent() {
  const [eventData, setEventData] = useState(null);
  const [eventError, setEventError] = useState(null);

  const { eventId } = useParams();

  useEffect(() => {
    async function loadKill() {
      try {
        const response = await fetch(`${baseUrl}/events/${eventId}`);
        const eventData = await response.json();
        setEventData(eventData);
      } catch (error) {
        setEventError(error);
      }
    }

    loadKill();
  }, [eventId]);

  let killer, victim, killDate;

  if (eventData) {
    killer = eventData.Killer.Name;
    victim = eventData.Victim.Name;

    killDate =
      new Date(eventData.TimeStamp).toUTCString().slice(0, 22) + ' UTC';
  }

  return (
    <>
      {eventData ? (
        <div className="event">
          <div className="killer-info">
            <h4>
              {killer} [{eventData.Killer.GuildName}]
            </h4>
            <h4>{Math.floor(eventData.Killer.AverageItemPower)}</h4>
            <PlayerGear player={eventData.Killer} />
          </div>

          <div className="event-info">
            <h4>Battle Info:</h4>
            <p>
              <b>{killDate}</b>
            </p>
            <p>Kill Fame: {separator(eventData.TotalVictimKillFame)}</p>
            <p>Individual Fame Gain: {separator(eventData.Killer.KillFame)}</p>
            <p>Regear Id: {eventData.EventId}</p>
            <p>{eventData.KillArea.split('_').join(' ')}</p>
          </div>

          <div className="victim-info">
            <h4>
              {victim} [{eventData.Victim.GuildName}]
            </h4>
            <h4>{Math.floor(eventData.Victim.AverageItemPower)}</h4>

            <PlayerGear player={eventData.Victim} />
          </div>
        </div>
      ) : (
        <div className="error-alert">
          <ErrorAlert error={eventError} />
        </div>
      )}
    </>
  );
}
