// import React, { useState } from 'react';

// function DesertSurvival({ onStageChange, onSpiceChange, skills, spice }) {
//   const [selectedSuit, setSelectedSuit] = useState(null);
//   const [waterSuit, setWaterSuit] = useState(Math.floor(Math.random() * 3));

//   const handleSuitSelect = (suit) => {
//     setSelectedSuit(suit);
//   };

//   const handleSubmit = () => {
//     if (selectedSuit === waterSuit) {
//       onSpiceChange(10);
//       onStageChange(4);
//     } else {
//       onSpiceChange(-10);
//     //   setAttempts(attempts + 1); // * Guess, that's the missing piece of the puzzle. But it lets the player try again and again, without any consequences. You end up with negative spice, but you can still proceed to the next stage.

//     //   if (spice < 10) { 
//         if (spice - 10 < 0) { // * This is the condition that should trigger the next stage correctly.
//         onStageChange(1);
//       } else {
//         setSelectedSuit(null);
//         setWaterSuit(Math.floor(Math.random() * 3));
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Desert Survival</h2>
//       <p>Select the stillsuit with water:</p>
//       <ul>
//         {[0, 1, 2].map((suit) => (
//           <li key={suit}>
//             <button onClick={() => handleSuitSelect(suit)}>
//               Stillsuit {suit + 1}
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleSubmit} disabled={selectedSuit === null}>
//         Submit
//       </button>
//     </div>
//   );
// }

// export default DesertSurvival;

import React, { useState } from 'react';
// import styles from '../stylz/SkillCards.module.css';
import styles from '../stylz/DesertSurvival.module.css';

function DesertSurvival({ onStageChange, onSpiceChange, skills, spice }) {
  const [selectedSuit, setSelectedSuit] = useState(null);
  const [waterSuit, setWaterSuit] = useState(Math.floor(Math.random() * 3));

  const handleSuitSelect = (suit) => {
    setSelectedSuit(suit);
  };

  const handleSubmit = () => {
    if (selectedSuit === waterSuit) {
      onSpiceChange(10);
      onStageChange(4);
    } else {
      onSpiceChange(-10);

      if (spice - 10 < 0) {
        onStageChange(1);
      } else {
        setSelectedSuit(null);
        setWaterSuit(Math.floor(Math.random() * 3));
      }
    }
  };

//   return (
//     <div>
//       <h2>Desert Survival</h2>
//       <p>Find the stillsuit with water:</p>
//       <ul className={styles.suitList}> 
//         {[0, 1, 2].map((suit) => (
//           <li key={suit} className={styles.suitItem}>
//             <button onClick={() => handleSuitSelect(suit)} className={styles.suitButton}>
//               Stillsuit {suit + 1}
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleSubmit} disabled={selectedSuit === null} className={styles.submitButton}>
//         Submit
//       </button>
//     </div>
//   );

return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Desert Survival</h2>
      <p className={styles.instructions}>Select the stillsuit with water:</p>
      <ul className={styles.suitList}>
        {[0, 1, 2].map((suit) => (
          <li key={suit} className={styles.suitItem}>
            <button
              onClick={() => handleSuitSelect(suit)}
              className={styles.suitButton}
            >
              Stillsuit {suit + 1}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit} disabled={selectedSuit === null} className={styles.submitButton}>
        Submit
      </button>
    </div>
  );
}

export default DesertSurvival;