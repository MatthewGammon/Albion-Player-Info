import { React } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { baseUrl, fetchWithTimeout } from '../../../utils/api';
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

  async function handleSubmit(event) {
    try {
      const response = await fetchWithTimeout(
        `${baseUrl}/search?q=${event.target.value}`
      );
      const playerInfo = await response.json();
      const playerId = playerInfo.players[0].Id;
      history.push(`/userProfile/${playerId}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className="character-select-form">
      <label htmlFor="character-select"></label>
      <select name="characters" id="character-select" onChange={handleSubmit}>
        {options}
      </select>
    </form>
  );
}
