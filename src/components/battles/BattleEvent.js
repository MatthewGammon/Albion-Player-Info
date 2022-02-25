import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../utils/api';
import { separator } from '../../utils/numbers';
import PlayerGear from '../player/playerGear/PlayerGear';
import './BattleEvent.css';
import ErrorAlert from '../layout/errors/ErrorAlert';
import { createRegearSubmission } from '../../utils/api';

export default function BattleEvent() {
  const [eventData, setEventData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const { eventId } = useParams();

  const regearableGuilds = ['Tidal', 'Tidal Surge', 'Ripple'];

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    setErrorMessage(null);
    async function loadKill() {
      try {
        const response = await fetch(`${baseUrl}/events/${eventId}`, {
          signal,
        });
        const eventData = await response.json();
        setEventData(eventData);
      } catch (error) {
        setErrorMessage(error);
      }
    }

    loadKill();
    return () => abortController.abort();
  }, [eventId]);

  const killer = eventData?.Killer.Name;
  const victim = eventData?.Victim.Name;
  const killerIp = Math.floor(eventData?.Killer.AverageItemPower);
  const victimIp = Math.floor(eventData?.Victim.AverageItemPower);

  let killDate = eventData?.TimeStamp;
  killDate = new Date(killDate).toUTCString().slice(0, 22) + ' UTC';

  async function handleSubmit() {
    try {
      setErrorMessage(null);
      const submission = {
        event_id: eventData.EventId.toString(),
        time_of_death: killDate,
        character_name: victim,
        guild_name: eventData.Victim?.GuildName,
        item_power: victimIp,
        main_hand: eventData.Victim.Equipment?.MainHand?.Type,
        head_piece: eventData.Victim.Equipment?.Head?.Type,
        chest_armor: eventData.Victim.Equipment?.Armor?.Type,
        shoes: eventData.Victim.Equipment?.Shoes?.Type,
      };
      await createRegearSubmission(submission);
      window.alert('A regear request was successfully submitted!');
    } catch (error) {
      setErrorMessage(error);
      window.scrollTo(0, 0);
    }
  }

  return (
    <>
      {errorMessage && (
        <div className="error-alert">
          <ErrorAlert error={errorMessage} />
        </div>
      )}

      {eventData && (
        <div className="event">
          <div className="killer-info">
            <h4>
              <a href={`/user-profile/${eventData.Killer.Id}`}>{killer}</a> [
              {eventData.Killer.GuildName}]
            </h4>

            <h4>{killerIp}</h4>
            <PlayerGear player={eventData.Killer} />
          </div>

          <div className="event-info">
            <h4>Battle Info</h4>
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
            <h4>{victimIp}</h4>

            <PlayerGear
              player={eventData.Victim}
              inventory={eventData.Victim.Inventory}
            />
            {regearableGuilds.includes(eventData.Victim.GuildName) && (
              <div className="regear-button">
                <button type="submit" onClick={handleSubmit}>
                  Submit Regear
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
