// import React, { useState } from "react";

// function Shop({ spice, onSpiceChange, skills, onSkillChange, onStageChange }) {
//   const [selectedSkill, setSelectedSkill] = useState(null);

//   const skillPrices = {
//     stealth: 10,
//     speed: 10,
//     intelligence: 10,
//     diplomacy: 10,
//     luck: 10,
//     // * The skill prices are supposed to be 10, 20, 30, 40 units of Spice, respectively - depending on the skill rarity. Or at least 10, 15, 20, 25.
//     // * But I decided to keep them all at 10 for simplicity. I tested it with the original values and it became too hard to progress.
//   };

//   const handleSkillSelect = (skill) => {
//     setSelectedSkill(skill);
//   };

//   const handlePurchase = () => {
//     if (spice >= skillPrices[selectedSkill]) {
//       onSpiceChange(-skillPrices[selectedSkill]);

//       // * - onSkillChange function - increase the bought/selected skill:

//       const skillLevels = ["common", "rare", "epic", "legendary"];
//       const randomLevel =
//         skillLevels[Math.floor(Math.random() * skillLevels.length)];

//       let multiplier = 1;
//       switch (randomLevel) {
//         case "common":
//           multiplier = 1;
//           break;
//         case "rare":
//           multiplier = 2;
//           break;
//         case "epic":
//           multiplier = 3;
//           break;
//         case "legendary":
//           multiplier = 4;
//           break;
//         default:
//           break;
//       }

//       // * ------------------------------

//       //   onSkillChange(selectedSkill, skills[selectedSkill] + 1);
//       onSkillChange(selectedSkill, multiplier);

//       setSelectedSkill(null);
//     }
//   };

//   //   const handleContinue = () => {
//   //     if (spice >= 0) {
//   //       onStageChange(5);
//   //     } else {
//   //       onStageChange(1); // * If the player doesn't have enough spice, they should go back to the beginning (like, stage1)
//   //     }
//   //   };

//   // * Doesn't work as expected. Let's try this:

//   const handleContinue = () => {
//     if (stage === 2) {
//       onStageChange(3);
//     } else if (stage === 4) {
//       onStageChange(5);
//     }
//   };

//   return (
//     <div>
//       <h2>Shop</h2>
//       <p>Spice: {spice}</p>
//       <ul>
//         {Object.keys(skillPrices).map((skill) => (
//           <li key={skill}>
//             <button onClick={() => handleSkillSelect(skill)}>
//               {skill} - {skillPrices[skill]} Spice
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handlePurchase} disabled={!selectedSkill}>
//         Purchase
//       </button>
//       <button onClick={handleContinue}>Continue</button>
//     </div>
//   );
// }

// export default Shop;

import React, { useState } from "react";
// import styles from '../stylz/SkillCards.module.css';
import styles from '../stylz/Shop.module.css';

function Shop({ stage, spice, onSpiceChange, skills, onSkillChange, onStageChange }) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillPrices = {
    stealth: 10,
    speed: 10,
    intelligence: 10,
    diplomacy: 10,
    luck: 10,
  };

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
  };

  const handlePurchase = () => {
    if (spice >= skillPrices[selectedSkill]) {
      onSpiceChange(-skillPrices[selectedSkill]);

      const skillLevels = ["common", "rare", "epic", "legendary"];
      const randomLevel =
        skillLevels[Math.floor(Math.random() * skillLevels.length)];

      let multiplier = 1;
      switch (randomLevel) {
        case "common":
          multiplier = 1;
          break;
        case "rare":
          multiplier = 2;
          break;
        case "epic":
          multiplier = 3;
          break;
        case "legendary":
          multiplier = 4;
          break;
        default:
          break;
      }

      onSkillChange(selectedSkill, multiplier);

      setSelectedSkill(null);
    }
  };

  const handleContinue = () => {
    if (stage === 2) {
      onStageChange(3);
    } else if (stage === 4) {
      onStageChange(5);
    }
  };

//   return (
//     <div>
//       <h2>Shop</h2>
//       <p>Spice: {spice}</p>
//       <ul>
//         {Object.keys(skillPrices).map((skill) => (
//           <li key={skill} className={styles.skillCard}>
//             <button onClick={() => handleSkillSelect(skill)}>
//               {skill} - {skillPrices[skill]} Spice
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handlePurchase} disabled={!selectedSkill}>
//         Purchase
//       </button>
//       <button onClick={handleContinue}>Continue</button>
//     </div>
//   );

return (
    <div>
      <h2 className={styles.shopHeading}>Shop</h2>
      <p className={styles.spiceCount}>Spice: {spice}</p>
      <ul className={styles.skillList}>
        {Object.keys(skillPrices).map((skill) => (
          <li key={skill} className={styles.skillItem}>
            <button
              onClick={() => handleSkillSelect(skill)}
              className={styles.skillButton}
            >
              {skill} - {skillPrices[skill]} Spice
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handlePurchase} disabled={!selectedSkill} className={styles.purchaseButton}>
        Purchase
      </button>
      <button onClick={handleContinue} className={styles.continueButton}>
        Continue
      </button>
    </div>
  );
}

export default Shop;