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

import paulImage from '../assets/paul_atreides.png';
import chaniImage from '../assets/chani.jpeg';
import stilgarImage from '../assets/stilgar.jpeg';
import jessicaImage from '../assets/lady_jessica.jpeg';
import duncanImage from '../assets/duncan_idaho.jpeg';
import gurneyImage from '../assets/gurney_halleck.jpeg';

const characters = [
  { name: 'Paul Atreides', image: paulImage, skills: { stealth: 1, diplomacy: 1 } },
  { name: 'Chani', image: chaniImage, skills: { stealth: 3, speed: 3, diplomacy: -3 } },
  { name: 'Stilgar', image: stilgarImage, skills: { stealth: 1, speed: 1, diplomacy: 1, luck: -2 } },
  { name: 'Lady Jessica', image: jessicaImage, skills: { stealth: 2, diplomacy: 2, luck: -2 } },
  { name: 'Duncan Idaho', image: duncanImage, skills: { speed: 3, intelligence: -1 } },
  { name: 'Gurney Halleck', image: gurneyImage, skills: { luck: 2, intelligence: 2, diplomacy: -3 } },
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
            <img src={character.image} alt={character.name} className={styles.characterImage} />
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
      <button onClick={handleStartGame} disabled={!selectedCharacter} className={styles.startGameBtn}>
        Start Game
      </button>
    </div>
  );
}

export default CharacterSelection;