import { React } from 'react';
import { useLocation } from 'react-router-dom';

export default function Battle() {
  const location = useLocation();

  const killData = location.state.killData;
  const killer = killData.Killer.Name;
  const killerGear = killData.Killer.Equipment;
  const victim = killData.Victim.Name;
  const victimGear = killData.Victim.Equipment;

  console.log(killData);

  return (
    <>
      {killData ? (
        <div className="main d-flex justify-content-around">
          <div className="killer-info">
            <div className="card text-center" style={{ width: '25rem' }}>
              <div className="card-body">
                <h3 className="card-title">{killer}</h3>
                <h5 className="card-text">Player's Gear</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Chest: {killerGear.Armor.Type}
                </li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
          <div className="victim-info">
            <div className="card text-center" style={{ width: '25rem' }}>
              <div className="card-body">
                <h3 className="card-title">{victim}</h3>
                <h5 className="card-text">Victim's Gear</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Chest: {victimGear.Armor.Type}
                </li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="link-error text-center">
          {' '}
          <h1>OOPS!</h1>
          <h3>
            You navigated to this page by opening a link in a new tab. Please go
            back and open the link in the same tab.
          </h3>
        </div>
      )}
    </>
  );
}
