import { React } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getPlayerId } from '../../../utils/api';
import './CharacterSelect.css';

export default function CharacterSelect() {
  const history = useHistory();

  const characters = [
    'CynicalEntity',
    'NinShika',
    'Domknit',
    'KweeKwee',
    'Looniee',
    'Usucrev',
    'Rhaegaryn',
    'GustavePH',
  ];

  const options = characters.map((character, index) => (
    <option value={character} key={index}>
      {character}
    </option>
  ));

  async function handleChange(event) {
    try {
      const playerId = await getPlayerId(event.target.value);
      history.push(`/userProfile/${playerId}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className="character-select-form">
      <label htmlFor="character-select"></label>
      <select name="characters" id="character-select" onChange={handleChange}>
        {options}
      </select>
    </form>
  );
}
