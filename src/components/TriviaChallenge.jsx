// import React, { useState } from "react";

// function TriviaChallenge({
//   onStageChange,
//   onSpiceChange,
//   onSkillChange,
//   spice,
// }) {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);

//   const questions = [
//     // * stage 1 - 1st round
//     {
//       question: "What is the main export commodity of the planet Arrakis?",
//       answers: [
//         { text: "Water", isCorrect: false },
//         { text: "Spice", isCorrect: true },
//         { text: "Metal", isCorrect: false },
//         { text: "Artworks", isCorrect: false },
//         { text: "Tech", isCorrect: false },
//         { text: "Groceries", isCorrect: false },
//       ],
//     },

//     // * stage 1 - 2nd round
//     {
//       question: "Who does Leto Atreides replace as ruler of Arrakis?",
//       answers: [
//         { text: "Paul Atreides", isCorrect: false },
//         { text: "Baron Vladimir Harkonnen", isCorrect: true },
//         { text: "Duncan Idaho", isCorrect: false },
//         { text: "Lieutenant Lanville", isCorrect: false },
//         { text: "Sardaukar Bashar", isCorrect: false },
//         { text: "Margot Fenring", isCorrect: false },
//       ],
//     },

//     // * stage 1 - 3rd round
//     {
//       question: "What is the name of the giant sandworms on Arrakis?",
//       answers: [
//         { text: "Shai-Hulud", isCorrect: true },
//         { text: "Muad'Dib", isCorrect: false },
//         { text: "Gom Jabbar", isCorrect: false },
//         { text: "Kwisatz Haderach", isCorrect: false },
//         { text: "The Voice", isCorrect: false },
//         { text: "The Sleeper", isCorrect: false },
//       ],
//     },

//     // * stage 1 - 4th round
//     {
//       question: "What is the name of the spice produced on Arrakis?",
//       answers: [
//         { text: "Cinnamon", isCorrect: false },
//         { text: "Saffron", isCorrect: false },
//         { text: "Paprika", isCorrect: false },
//         { text: "Melange", isCorrect: true },
//         { text: "Curry", isCorrect: false },
//         { text: "Ginger", isCorrect: false },
//       ],
//     },

//     // * stage 1 - 5th round
//     {
//       question: "What is the name of the native people of Arrakis?",
//       answers: [
//         { text: "Fremen", isCorrect: true },
//         { text: "Sardaukar", isCorrect: false },
//         { text: "Harkonnen", isCorrect: false },
//         { text: "Atreides", isCorrect: false },
//         { text: "Bene Gesserit", isCorrect: false },
//         { text: "Spacing Guild", isCorrect: false },
//       ],
//     },
//   ];

//   const handleAnswerSelect = (answer) => {
//     setSelectedAnswer(answer);
//   };

//   //   const handleSubmit = () => {
//   //     if (selectedAnswer === questions[currentQuestion].correctAnswer) {
//   //       onSpiceChange(10);

//   //       // * Or:
//   //     // if (selectedAnswer.isCorrect) {
//   //     //     onSpiceChange(10);
//   //     //     levelUpSkill();
//   //     // * ??

//   //     } else {
//   //       onSpiceChange(-5);
//   //     }

//   //     if (currentQuestion === questions.length - 1) {
//   //       onStageChange(3);
//   //     } else {
//   //       setCurrentQuestion(currentQuestion + 1);
//   //       setSelectedAnswer(null);
//   //     }
//   //   };

//   const handleSubmit = () => {
//     if (selectedAnswer.isCorrect) {
//       onSpiceChange(10);
//       levelUpSkill();
//     } else {
//       onSpiceChange(-5);
//     }

//     if (currentQuestion === questions.length - 1) {
//       // if (spice >= 0) {
//       if (spice + (selectedAnswer.isCorrect ? 10 : -5) >= 0) {
//         onStageChange(2); // * stage 2 - Shop
//       } else {
//         onStageChange(1); // * stage 1 - TriviaChallenge (Restart)
//       }

//       // if (currentQuestion === questions.length - 1) {
//       //   onStageChange(2); // * stage 2 - Shop | stage 3 - DesertSurvival... ?
//     } else {
//       setCurrentQuestion(currentQuestion + 1);
//       setSelectedAnswer(null);
//     }
//   };

//   const levelUpSkill = () => {
//     const skills = ["stealth", "speed", "intelligence", "diplomacy", "luck"];
//     const randomSkill = skills[Math.floor(Math.random() * skills.length)];
//     const skillLevels = ["common", "rare", "epic", "legendary"];
//     const randomLevel =
//       skillLevels[Math.floor(Math.random() * skillLevels.length)];

//     let multiplier = 1;
//     switch (randomLevel) {
//       case "common":
//         multiplier = 1;
//         break;
//       case "rare":
//         multiplier = 2;
//         break;
//       case "epic":
//         multiplier = 3;
//         break;
//       case "legendary":
//         multiplier = 4;
//         break;
//       default:
//         break;
//     }

//     onSkillChange(randomSkill, multiplier);
//   };

//   return (
//     <div>
//       <h2>Trivia Challenge</h2>
//       <p>{questions[currentQuestion].question}</p>
//       <ul>
//         {questions[currentQuestion].answers.map((answer, index) => (
//           <li key={index}>
//             <button onClick={() => handleAnswerSelect(answer)}>
//               {answer.text}
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleSubmit} disabled={!selectedAnswer}>
//         Submit
//       </button>
//     </div>
//   );
// }

// export default TriviaChallenge;

import React, { useState } from "react";
// import styles from '../stylz/SkillCards.module.css';
import styles from '../stylz/TriviaChallenge.module.css';

function TriviaChallenge({
  onStageChange,
  onSpiceChange,
  onSkillChange,
  spice,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    // * stage 1 - 1st round
    {
      question: "What is the main export commodity of the planet Arrakis?",
      answers: [
        { text: "Water", isCorrect: false },
        { text: "Spice", isCorrect: true },
        { text: "Metal", isCorrect: false },
        { text: "Artworks", isCorrect: false },
        { text: "Tech", isCorrect: false },
        { text: "Groceries", isCorrect: false },
      ],
    },

    // * stage 1 - 2nd round
    {
      question: "Who does Leto Atreides replace as ruler of Arrakis?",
      answers: [
        { text: "Paul Atreides", isCorrect: false },
        { text: "Baron Vladimir Harkonnen", isCorrect: true },
        { text: "Duncan Idaho", isCorrect: false },
        { text: "Lieutenant Lanville", isCorrect: false },
        { text: "Sardaukar Bashar", isCorrect: false },
        { text: "Margot Fenring", isCorrect: false },
      ],
    },

    // * stage 1 - 3rd round
    {
      question: "What is the name of the giant sandworms on Arrakis?",
      answers: [
        { text: "Shai-Hulud", isCorrect: true },
        { text: "Muad'Dib", isCorrect: false },
        { text: "Gom Jabbar", isCorrect: false },
        { text: "Kwisatz Haderach", isCorrect: false },
        { text: "The Voice", isCorrect: false },
        { text: "The Sleeper", isCorrect: false },
      ],
    },

    // * stage 1 - 4th round
    {
      question: "What is the name of the spice produced on Arrakis?",
      answers: [
        { text: "Cinnamon", isCorrect: false },
        { text: "Saffron", isCorrect: false },
        { text: "Paprika", isCorrect: false },
        { text: "Melange", isCorrect: true },
        { text: "Curry", isCorrect: false },
        { text: "Ginger", isCorrect: false },
      ],
    },

    // * stage 1 - 5th round
    {
      question: "What is the name of the native people of Arrakis?",
      answers: [
        { text: "Fremen", isCorrect: true },
        { text: "Sardaukar", isCorrect: false },
        { text: "Harkonnen", isCorrect: false },
        { text: "Atreides", isCorrect: false },
        { text: "Bene Gesserit", isCorrect: false },
        { text: "Spacing Guild", isCorrect: false },
      ],
    },
  ];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (selectedAnswer.isCorrect) {
      onSpiceChange(10);
      levelUpSkill();
    } else {
      onSpiceChange(-5);
    }

    if (currentQuestion === questions.length - 1) {
      if (spice + (selectedAnswer.isCorrect ? 10 : -5) >= 0) {
        onStageChange(2);
      } else {
        onStageChange(1);
      }
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  const levelUpSkill = () => {
    const skills = ["stealth", "speed", "intelligence", "diplomacy", "luck"];
    const randomSkill = skills[Math.floor(Math.random() * skills.length)];
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

    onSkillChange(randomSkill, multiplier);
  };

//   return (
//     <div>
//       <h2>Trivia Challenge</h2>
//       <p>{questions[currentQuestion].question}</p>
//       <ul>
//         {questions[currentQuestion].answers.map((answer, index) => (
//           <li key={index} className={styles.answerButton}>
//             <button onClick={() => handleAnswerSelect(answer)}>
//               {answer.text}
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleSubmit} disabled={!selectedAnswer} className={styles.submitButton}>
//         Submit
//       </button>
//     </div>
//   );

return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Trivia Challenge</h2>
      <p className={styles.question}>{questions[currentQuestion].question}</p>
      <ul className={styles.answerList}>
        {questions[currentQuestion].answers.map((answer, index) => (
          <li key={index} className={styles.answerItem}>
            <button
              onClick={() => handleAnswerSelect(answer)}
              className={styles.answerButton}
            >
              {answer.text}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit} disabled={!selectedAnswer} className={styles.submitButton}>
        Submit
      </button>
    </div>
  );
}

export default TriviaChallenge;
