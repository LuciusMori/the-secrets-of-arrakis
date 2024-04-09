// import React, { useState } from "react";
// import "./App.css";
// import CharacterSelection from "./components/CharacterSelection";
// import TriviaChallenge from "./components/TriviaChallenge";
// import Shop from "./components/Shop";
// import DesertSurvival from "./components/DesertSurvival";
// import SietchNavigation from "./components/SietchNavigation";

// function App() {
//   const [stage, setStage] = useState(0);
//   const [spice, setSpice] = useState(0);
//   const [skills, setSkills] = useState({
//     stealth: 0,
//     speed: 0,
//     intelligence: 0,
//     diplomacy: 0,
//     luck: 0,
//   });

//   const handleStageChange = (newStage) => {
//     setStage(newStage);
//   };

//   const handleSpiceChange = (amount) => {
//     setSpice(spice + amount);
//   };

//   // const handleSkillChange = (skill, value) => {
//   //   setSkills({ ...skills, [skill]: value });
//   // };

//   const handleSkillChange = (skill, multiplier) => {
//     setSkills((prevSkills) => ({
//       ...prevSkills,
//       [skill]: prevSkills[skill] + multiplier,
//     }));
//   };

//   return (
//     <div className="App">
//       {stage === 0 && <CharacterSelection onStageChange={handleStageChange} />}
//       {stage === 1 && (
//         <TriviaChallenge
//           onStageChange={handleStageChange}
//           onSpiceChange={handleSpiceChange}
//           onSkillChange={handleSkillChange}
//           spice={spice} // * Added spice prop - according to the last changes in the TriviaChallenge component.
//         />
//       )}
//       {stage === 2 && (
//         <Shop
//           stage={stage} // * Added stage prop - according to the last changes in the Shop component.
//           spice={spice}
//           onSpiceChange={handleSpiceChange}
//           skills={skills}
//           onSkillChange={handleSkillChange}
//           onStageChange={handleStageChange}
//         />
//       )}
//       {stage === 3 && (
//         <DesertSurvival
//           onStageChange={handleStageChange}
//           onSpiceChange={handleSpiceChange}
//           skills={skills}
//           spice={spice} // * Added spice prop - this is SO important! Otherwise, the player ends up with negative spice and can't progress.
//         />
//       )}
//       {stage === 4 && (
//         <Shop
//           stage={stage} // * Again: Added stage prop - according to the last changes in the Shop component.
//           spice={spice}
//           onSpiceChange={handleSpiceChange}
//           skills={skills}
//           onSkillChange={handleSkillChange}
//           onStageChange={handleStageChange}
//         />
//       )}
//       {stage === 5 && (
//         <SietchNavigation onStageChange={handleStageChange} skills={skills} />
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

import "./App.css";
// import "../stylz/SkillCards.css";

import CharacterSelection from "./components/CharacterSelection";
import TriviaChallenge from "./components/TriviaChallenge";
import Shop from "./components/Shop";
import DesertSurvival from "./components/DesertSurvival";
import SietchNavigation from "./components/SietchNavigation";

function App() {
  const [stage, setStage] = useState(0);
  const [spice, setSpice] = useState(0);
  const [skills, setSkills] = useState({
    stealth: 0,
    speed: 0,
    intelligence: 0,
    diplomacy: 0,
    luck: 0,
  });

  const handleStageChange = (newStage) => {
    setStage(newStage);
  };

  const handleSpiceChange = (amount) => {
    setSpice(spice + amount);
  };

  const handleSkillChange = (skill, multiplier) => {
    setSkills((prevSkills) => ({
      ...prevSkills,
      [skill]: prevSkills[skill] + multiplier,
    }));
  };

  return (
    <div className="App">
      {stage === 0 && <CharacterSelection onStageChange={handleStageChange} />}
      {stage === 1 && (
        <TriviaChallenge
          onStageChange={handleStageChange}
          onSpiceChange={handleSpiceChange}
          onSkillChange={handleSkillChange}
          spice={spice}
        />
      )}
      {stage === 2 && (
        <Shop
          stage={stage}
          spice={spice}
          onSpiceChange={handleSpiceChange}
          skills={skills}
          onSkillChange={handleSkillChange}
          onStageChange={handleStageChange}
        />
      )}
      {stage === 3 && (
        <DesertSurvival
          onStageChange={handleStageChange}
          onSpiceChange={handleSpiceChange}
          skills={skills}
          spice={spice}
        />
      )}
      {stage === 4 && (
        <Shop
          stage={stage}
          spice={spice}
          onSpiceChange={handleSpiceChange}
          skills={skills}
          onSkillChange={handleSkillChange}
          onStageChange={handleStageChange}
        />
      )}
      {stage === 5 && (
        <SietchNavigation onStageChange={handleStageChange} skills={skills} />
      )}
    </div>
  );
}

export default App;