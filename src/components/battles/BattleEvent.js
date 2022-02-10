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
    const abortController = new AbortController();
    const { signal } = abortController;
    async function loadKill() {
      try {
        const response = await fetch(`${baseUrl}/events/${eventId}`, {
          signal,
        });
        const eventData = await response.json();
        setEventData(eventData);
      } catch (error) {
        setEventError(error);
      }
    }

    loadKill();
    return () => abortController.abort();
  }, [eventId]);

  const killer = eventData?.Killer.Name;
  const victim = eventData?.Victim.Name;
  let killDate = eventData?.TimeStamp;
  killDate = new Date(killDate).toUTCString().slice(0, 22) + ' UTC';

  return (
    <>
      {eventData ? (
        <div className="event">
          <div className="killer-info">
            <h4>
              <a href={`/user-profile/${eventData.Killer.Id}`}>{killer}</a> [
              {eventData.Killer.GuildName}]
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
            <p>{eventData.KillArea?.split('_').join(' ')}</p>
          </div>

          <div className="victim-info">
            <h4>
              <a href={`/user-profile/${eventData.Victim.Id}`}> {victim}</a> [
              {eventData.Victim.GuildName}]
            </h4>
            <h4>{Math.floor(eventData.Victim.AverageItemPower)}</h4>

            <PlayerGear
              player={eventData.Victim}
              inventory={eventData.Victim.Inventory}
            />
            <div className="regear-button">
              <button>Submit Regear</button>
            </div>
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
