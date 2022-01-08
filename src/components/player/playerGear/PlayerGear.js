import { baseUrl } from '../../../utils/api';
import './PlayerGear.css';

export default function PlayerGear({ player }) {
  const spriteBaseUrl = `${baseUrl}/items`;
  const gear = player.Equipment;

  const gearTypes = Object.keys(gear);

  const gearArray = [];
  for (const type of gearTypes) {
    gearArray.push({
      gear: gear[type]?.Type,
      quality: gear[type]?.Quality,
    });
  }

  return (
    <div className="player-gear">
      {' '}
      <div className="container-1 ">
        <div className="bag">
          <img
            src={`${spriteBaseUrl}/${gear.Bag?.Type}/?quality=${gear.Bag?.Quality}`}
            alt="Bag"
          />
        </div>

        <div className="main-hand">
          <img
            src={`${spriteBaseUrl}/${gear.MainHand?.Type}/?quality=${gear.MainHand?.Quality}`}
            alt="Main Hand"
          />
        </div>
        <div className="potion">
          <img src={`${spriteBaseUrl}/${gear.Potion?.Type}/`} alt="Potion" />
        </div>
      </div>
      <div className="container-2 ">
        <div className="head">
          <img
            src={`${spriteBaseUrl}/${gear.Head?.Type}/?quality=${gear.Head?.Quality}`}
            alt="Head Piece"
          />
        </div>
        <div className="chest">
          <img
            src={`${spriteBaseUrl}/${gear.Armor?.Type}/?quality=${gear.Armor?.Quality}`}
            alt="Chest Piece"
          />
        </div>
        <div className="boots">
          <img
            src={`${spriteBaseUrl}/${gear.Shoes?.Type}/?quality=${gear.Shoes?.Quality}`}
            alt="Boots"
          />
        </div>
        <div className="mount">
          <img
            src={`${spriteBaseUrl}/${gear.Mount?.Type}/?quality=${gear.Mount?.Quality}`}
            alt="Mount"
          />
        </div>
      </div>
      <div className="container-3 ">
        <div className="cape">
          <img
            src={`${spriteBaseUrl}/${gear.Cape?.Type}/?quality=${gear.Cape?.Quality}`}
            alt="Cape"
          />
        </div>
        <div className="off-hand">
          {gear.OffHand && (
            <img
              src={`${spriteBaseUrl}/${gear.OffHand?.Type}/?quality=${gear.OffHand?.Quality}`}
              alt="Off Hand"
            />
          )}
        </div>
        <div className="food">
          <img src={`${spriteBaseUrl}/${gear.Food?.Type}/`} alt="Food" />
        </div>
      </div>
    </div>
  );
}
