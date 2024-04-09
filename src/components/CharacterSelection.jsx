// import React from 'react';

// function CharacterSelection({ onStageChange }) {
//   const handleCharacterSelect = () => {
//     onStageChange(1);
//   };

//   return (
//     <div>
//       <h2>Character Selection</h2>
//       <button onClick={handleCharacterSelect}>Start Game</button>
//     </div>
//   );
// }

// export default CharacterSelection;

import React, { useState } from 'react';
import styles from '../stylz/CharacterSelection.module.css';

const characters = [
  { name: 'Paul Atreides', image: '/path/to/paul.jpg', skills: { stealth: 1, diplomacy: 1 } },
  { name: 'Lady Jessica', image: '/path/to/jessica.jpg', skills: { stealth: 2, diplomacy: 2, luck: -2 } },
  { name: 'Duncan Idaho', image: '/path/to/duncan.jpg', skills: { speed: 3, intelligence: -1 } },
  { name: 'Gurney Halleck', image: '/path/to/gurney.jpg', skills: { luck: 2, intelligence: 2, diplomacy: -3 } },
  { name: 'Stilgar', image: '/path/to/stilgar.jpg', skills: { stealth: 1, speed: 1, diplomacy: 1, luck: -2 } },
  { name: 'Chani', image: '/path/to/chani.jpg', skills: { stealth: 3, speed: 3, diplomacy: -3 } },
];

function CharacterSelection({ onStageChange }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  const handleStartGame = () => {
    onStageChange(1, selectedCharacter);
  };

  return (
    <div className={styles.container}>
      <h2>Select Your Character</h2>
      <div className={styles.characterGrid}>
        {characters.map((character) => (
          <div
            key={character.name}
            className={`${styles.characterCard} ${
              selectedCharacter === character ? styles.selected : ''
            }`}
            onClick={() => handleCharacterSelect(character)}
          >
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <ul>
              {Object.entries(character.skills).map(([skill, value]) => (
                <li key={skill}>
                  {skill}: {value}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button onClick={handleStartGame} disabled={!selectedCharacter}>
        Start Game
      </button>
    </div>
  );
}

export default CharacterSelection;