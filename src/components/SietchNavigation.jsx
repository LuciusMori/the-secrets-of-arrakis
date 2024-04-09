import React, { useState } from "react";
import styles from '../stylz/SkillCards.module.css';

function SietchNavigation({ onStageChange, skills }) {
  const [currentRoom, setCurrentRoom] = useState(0);
  const [message, setMessage] = useState("");

  const rooms = [
    {
      description:
        "You are at the entrance of the Sietch. There are paths leading to the living quarters and the training grounds.",
      options: [
        {
          text: "Go to the living quarters",
          nextRoom: 1,
          requiredSkill: "diplomacy",
          requiredLevel: 1,
        },
        {
          text: "Go to the training grounds",
          nextRoom: 2,
          requiredSkill: "stealth",
          requiredLevel: 1,
        },
      ],
    },
    {
      description:
        "You are in the living quarters. There are Fremen discussing water conservation techniques.",
      options: [
        {
          text: "Join the conversation",
          nextRoom: 3,
          requiredSkill: "intelligence",
          requiredLevel: 2,
        },
        {
          text: "Sneak past the Fremen",
          nextRoom: 4,
          requiredSkill: "stealth",
          requiredLevel: 2,
        },
      ],
    },
    {
      description:
        "You are at the training grounds. Young Fremen are practicing combat techniques.",
      options: [
        {
          text: "Train with the Fremen",
          nextRoom: 5,
          requiredSkill: "speed",
          requiredLevel: 2,
        },
        {
          text: "Observe their techniques",
          nextRoom: 6,
          requiredSkill: "intelligence",
          requiredLevel: 2,
        },
      ],
    },
    {
      description:
        "You have impressed the Fremen with your knowledge of water conservation. They share valuable information with you.",
      options: [{ text: "Continue", nextRoom: 7 }],
    },
    {
      description:
        "You successfully sneak past the Fremen and discover a hidden room filled with ancient Fremen artifacts.",
      options: [{ text: "Continue", nextRoom: 7 }],
    },
    {
      description:
        "You train with the Fremen and learn new combat techniques, increasing your speed and agility.",
      options: [{ text: "Continue", nextRoom: 7 }],
    },
    {
      description:
        "You observe the Fremen techniques and gain valuable insights, increasing your intelligence.",
      options: [{ text: "Continue", nextRoom: 7 }],
    },
    {
      description:
        "Congratulations! You have successfully navigated the Sietch and proven your worth to the Fremen.",
      options: [{ text: "Finish", nextRoom: -1 }],
    },
  ];

  const handleOptionClick = (option) => {
    if (
      option.requiredSkill &&
      skills[option.requiredSkill] < option.requiredLevel
    ) {
      setMessage(
        `You need a(n) ${option.requiredSkill} level of at least ${option.requiredLevel} to proceed.`
      );
      return;
    }

    setCurrentRoom(option.nextRoom);
    setMessage("");

    if (option.nextRoom === -1) {
      onStageChange(6);
    }
  };

  // * Addition:

  const checkIfStuck = () => {
    const currentOptions = rooms[currentRoom].options;
    const canProceed = currentOptions.some(
      (option) =>
        !option.requiredSkill ||
        skills[option.requiredSkill] >= option.requiredLevel
    );

    if (!canProceed) {
      onStageChange(1);
    }
  };

  // * ------------------------------------------------

  return (
    <div>
      <h2 className={styles.navigationHeading}>Sietch Navigation Challenge</h2>
      <p className={styles.navigationDescription}>{rooms[currentRoom].description}</p>
      {message && <p className={styles.navigationMessage}>{message}</p>}
      <ul className={styles.navigationOptions}>
        {rooms[currentRoom].options.map((option, index) => (
          <li key={index} className={styles.navigationOption}>
            <button onClick={() => handleOptionClick(option)} className={styles.navigationButton}>
              {option.text}
            </button>
          </li>
        ))}
      </ul>
      {checkIfStuck()} {/* Important !! Helps a lot... */}
    </div>
  );
}

export default SietchNavigation;