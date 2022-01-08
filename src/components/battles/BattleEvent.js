import { React } from 'react';
import { useLocation } from 'react-router-dom';
import { separator } from '../../utils/numbers';
import './BattleEvent.css';

export default function BattleEvent() {
  const location = useLocation();

  const killData = location.state.killData;
  const killer = killData.Killer.Name;
  const killerGear = killData.Killer.Equipment;
  const victim = killData.Victim.Name;
  const victimGear = killData.Victim.Equipment;

  const killDate = new Date(killData.TimeStamp).toDateString();

  console.log(killData);

  return (
    <>
      {killData ? (
        <div className="main-event row d-flex justify-content-evenly">
          <div className="killer-info col-3">
            <div className="card text-center">
              <div className="card-body">
                <h3 className="card-title">{killer}</h3>
                <h5 className="card-text">{killData.Killer.GuildName}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Head: {killerGear.Head?.Type}
                </li>
                <li className="list-group-item">
                  Chest: {killerGear.Armor?.Type}
                </li>
                <li className="list-group-item">
                  Feet: {killerGear.Shoes?.Type}
                </li>
                <li className="list-group-item">
                  Main Hand: {killerGear.MainHand?.Type}
                </li>
                <li className="list-group-item">
                  Off Hand: {killerGear.OffHand?.Type}
                </li>
                <li className="list-group-item">Bag: {killerGear.Bag?.Type}</li>
                <li className="list-group-item">
                  Cape: {killerGear.Cape?.Type}
                </li>
                <li className="list-group-item">
                  Food: {killerGear.Food?.Type}
                </li>
                <li className="list-group-item">
                  Potion: {killerGear.Potion?.Type}
                </li>
                <li className="list-group-item">
                  Mount: {killerGear.Mount?.Type}
                </li>
              </ul>
            </div>
          </div>

          <div className="center-column col-3">
            <div className="kill-or-killed">
              <h3>KILLED</h3>
            </div>
            <div className="event-info">
              <h5>Kill Fame: {separator(killData.TotalVictimKillFame)}</h5>
              <p>Individual Fame Gain: {separator(killData.Killer.KillFame)}</p>
              <p>Date: {killDate}</p>
              <p>Event Id: {killData.BattleId}</p>
              <p>Location: {killData.KillArea.split('_').join(' ')}</p>
            </div>
          </div>

          <div className="victim-info col-3">
            <div className="card text-center">
              <div className="card-body">
                <h3 className="card-title">{victim}</h3>
                <h5 className="card-text">{killData.Victim.GuildName}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Head: {victimGear.Head?.Type}
                </li>
                <li className="list-group-item">
                  Chest: {victimGear.Armor?.Type}
                </li>
                <li className="list-group-item">
                  Feet: {victimGear.Shoes?.Type}
                </li>
                <li className="list-group-item">
                  Main Hand: {victimGear.MainHand?.Type}
                </li>
                <li className="list-group-item">
                  Off Hand: {victimGear.OffHand?.Type}
                </li>
                <li className="list-group-item">Bag: {killerGear.Bag?.Type}</li>
                <li className="list-group-item">
                  Cape: {victimGear.Cape?.Type}
                </li>
                <li className="list-group-item">
                  Food: {victimGear.Food?.Type}
                </li>
                <li className="list-group-item">
                  Potion: {victimGear.Potion?.Type}
                </li>
                <li className="list-group-item">
                  Mount: {victimGear.Mount?.Type}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
