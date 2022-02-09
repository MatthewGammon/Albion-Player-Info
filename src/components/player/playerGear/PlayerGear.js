import { baseUrl } from '../../../utils/api';
import './PlayerGear.css';

export default function PlayerGear({ player, inventory }) {
  const spriteBaseUrl = `${baseUrl}/items`;
  const gear = player.Equipment;

  let playerInventory;
  let filteredInventory;
  if (inventory) {
    playerInventory = inventory.filter((item) => {
      return item;
    });

    if (playerInventory.length === 0) {
      filteredInventory = null;
    } else {
      filteredInventory = playerInventory.map((item, index) => (
        <div key={index} className="inventory-item">
          <img
            src={`${spriteBaseUrl}/${item.Type}/?quality=${item.Quality}`}
            alt={item.Type}
            width={217}
            height={217}
          />
          <span className="item-count">{item.Count}</span>
        </div>
      ));
    }
  }

  return (
    <div className="player-items">
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

      {filteredInventory && (
        <div className="player-inventory">
          <div className="player-inventory-header">
            <h3>Victim's Inventory</h3>
          </div>
          <div className="player-inventory-items">{filteredInventory}</div>
        </div>
      )}
    </div>
  );
}
