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

  const dummyImage = 'https://dummyimage.com/217x217/0173a0/0173a0';

  return (
    <div className="player-gear">
      {' '}
      <div className="container-1 ">
        <div className="bag">
          <img
            src={
              gear.Bag
                ? `${spriteBaseUrl}/${gear.Bag.Type}/?quality=${gear.Bag.Quality}`
                : dummyImage
            }
            alt="Bag"
            width={217}
            height={217}
          />
        </div>

        <div className="main-hand">
          <img
            src={
              gear.MainHand
                ? `${spriteBaseUrl}/${gear.MainHand.Type}/?quality=${gear.MainHand.Quality}`
                : dummyImage
            }
            alt="Main Hand"
            width={217}
            height={217}
          />
        </div>
        <div className="potion">
          <img
            src={
              gear.Potion
                ? `${spriteBaseUrl}/${gear.Potion.Type}/?quality=${gear.Potion.Quality}`
                : dummyImage
            }
            alt="Potion"
            width={217}
            height={217}
          />
        </div>
      </div>
      <div className="container-2 ">
        <div className="head">
          <img
            src={
              gear.Head
                ? `${spriteBaseUrl}/${gear.Head.Type}/?quality=${gear.Head.Quality}`
                : dummyImage
            }
            alt="Head Piece"
            width={217}
            height={217}
          />
        </div>
        <div className="chest">
          <img
            src={
              gear.Armor
                ? `${spriteBaseUrl}/${gear.Armor.Type}/?quality=${gear.Armor.Quality}`
                : dummyImage
            }
            alt="Chest Piece"
            width={217}
            height={217}
          />
        </div>
        <div className="boots">
          <img
            src={
              gear.Shoes
                ? `${spriteBaseUrl}/${gear.Shoes.Type}/?quality=${gear.Shoes.Quality}`
                : dummyImage
            }
            alt="Boots"
            width={217}
            height={217}
          />
        </div>
        <div className="mount">
          <img
            src={
              gear.Mount
                ? `${spriteBaseUrl}/${gear.Mount.Type}/?quality=${gear.Mount.Quality}`
                : dummyImage
            }
            alt="Mount"
            width={217}
            height={217}
          />
        </div>
      </div>
      <div className="container-3 ">
        <div className="cape">
          <img
            src={
              gear.Cape
                ? `${spriteBaseUrl}/${gear.Cape.Type}/?quality=${gear.Cape.Quality}`
                : dummyImage
            }
            alt="Cape"
            width={217}
            height={217}
          />
        </div>
        <div className="off-hand">
          <img
            src={
              gear.OffHand
                ? `${spriteBaseUrl}/${gear.OffHand.Type}/?quality=${gear.OffHand.Quality}`
                : dummyImage
            }
            alt="Off Hand"
            width={217}
            height={217}
          />
        </div>
        <div className="food">
          <img
            src={
              gear.Food
                ? `${spriteBaseUrl}/${gear.Food.Type}/?quality=${gear.Food.Quality}`
                : dummyImage
            }
            alt="Food"
            width={217}
            height={217}
          />
        </div>
      </div>
    </div>
  );
}
