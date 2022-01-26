import { baseUrl } from '../../../utils/api';
import './PlayerGear.css';

export default function PlayerGear({ player }) {
  const spriteBaseUrl = `${baseUrl}/items`;
  const gear = player.Equipment;

  return (
    <div className="player-gear">
      <div className="bag">
        {gear.Bag && (
          <img
            src={`${spriteBaseUrl}/${gear.Bag.Type}/?quality=${gear.Bag.Quality}`}
            alt="bag"
            width={217}
            height={217}
          />
        )}
      </div>
      <div className="head">
        {gear.Head && (
          <img
            src={`${spriteBaseUrl}/${gear.Head.Type}/?quality=${gear.Head.Quality}`}
            alt="Head Piece"
            width={217}
            height={217}
          />
        )}
      </div>
      <div className="cape">
        {gear.Cape && (
          <img
            src={`${spriteBaseUrl}/${gear.Cape.Type}/?quality=${gear.Cape.Quality}`}
            alt="Cape"
            width={217}
            height={217}
          />
        )}
      </div>
      <div className="main-hand">
        {gear.MainHand && (
          <img
            src={`${spriteBaseUrl}/${gear.MainHand.Type}/?quality=${gear.MainHand.Quality}`}
            alt="Main Hand"
            width={217}
            height={217}
          />
        )}
      </div>
      <div className="chest">
        {gear.Armor && (
          <img
            src={`${spriteBaseUrl}/${gear.Armor.Type}/?quality=${gear.Armor.Quality}`}
            alt="Chest Piece"
            width={217}
            height={217}
          />
        )}
      </div>
      <div className="off-hand">
        {gear.OffHand && (
          <img
            src={`${spriteBaseUrl}/${gear.OffHand.Type}/?quality=${gear.OffHand.Quality}`}
            alt="Off Hand"
            width={217}
            height={217}
          />
        )}
      </div>
      <div className="potion">
        {gear.Potion && (
          <img
            src={`${spriteBaseUrl}/${gear.Potion.Type}/?quality=${gear.Potion.Quality}`}
            alt="Potion"
            width={217}
            height={217}
          />
        )}
      </div>
      <div className="boots">
        {gear.Shoes && (
          <img
            src={`${spriteBaseUrl}/${gear.Shoes.Type}/?quality=${gear.Shoes.Quality}`}
            alt="Boots"
            width={217}
            height={217}
          />
        )}
      </div>{' '}
      <div className="food">
        {gear.Food && (
          <img
            src={`${spriteBaseUrl}/${gear.Food.Type}/?quality=${gear.Food.Quality}`}
            alt="Food"
            width={217}
            height={217}
          />
        )}
      </div>
      <div className="mount">
        {gear.Mount && (
          <img
            src={`${spriteBaseUrl}/${gear.Mount.Type}/?quality=${gear.Mount.Quality}`}
            alt="Mount"
            width={217}
            height={217}
          />
        )}
      </div>
    </div>
  );
}
