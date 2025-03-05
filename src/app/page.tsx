"use client"; // Add this at the top to indicate client-side code

import React, { useState, useEffect } from "react";

export default function Home() {
  const [shake, setShake] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState("");

  const messages = [
    "#1 The future belongs to those who believe in the beauty of their dreams.",
    "#2 Don't watch the clock; do what it does. Keep going.",
    "#3 Believe you can and you're halfway there.",
    "#4 Your time is limited, so don't waste it living someone else's life.",
    "#5 Success is in your hands!",
    "#6 The only way to do great work is to love what you do.",
    "#7 Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "#8 The only limit to our realization of tomorrow will be our doubts of today.",
    "#9 Be yourself; everyone else is already taken.",
    "#10 The happiness of your life depends on the quality of your thoughts.",
    "#11 To live is the rarest thing in the world. Most people exist, that is all.",
    "#12 Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "#13 Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    "#14 The best way to cheer yourself is to try to cheer someone else up.",
    "#15 Don't wait for everything to be perfect before you decide to enjoy your life.",
    "#16 Find joy in the ordinary.",
    "#17 Today is a good day to be happy.",
    "#18 Happiness is not something readymade. It comes from your own actions.",
    "#19 Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
    "#20 Happiness is a choice. You can choose to be happy. There's going to be stress in life, but it's your choice whether you let it affect you or not.",
  ];

  const handleClick = () => {
    setShake(true);
    // Reset the shake animation and show the pop-up after it finishes (1.8s for 3 loops)
    setTimeout(() => {
      setShake(false);
      // Pick a random message from the list
      const randomIndex = Math.floor(Math.random() * messages.length);
      setPopupText(messages[randomIndex]);
      setIsPopupVisible(true);
    }, 1800); // 1800ms for 3 loops (0.6s * 3)
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false); // Close the pop-up
  };

  useEffect(() => {
    // Inject the shake animation style dynamically
    const style = `
    @keyframes shake {
      0% { transform: translateX(0); }
      25% { transform: translateX(-20px); }
      50% { transform: translateX(0); }
      75% { transform: translateX(20px); }
      100% { transform: translateX(0); }
    }
    `;
    const styleTag = document.createElement("style");
    styleTag.innerHTML = style;
    document.head.appendChild(styleTag);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>WELCOME TO SIEM SEE</h1>
      </div>
      <img
        src="/images/image copy.png" // Correct image path
        alt="SIEM SEE"
        style={{
          ...styles.image,
          animation: shake ? "shake 0.6s ease-in-out 3" : "none",
        }}
        onClick={handleClick} // Trigger shake on click
      />

      {isPopupVisible && (
        <div style={styles.popup}>
          <h2 style={styles.popupText}>{popupText}</h2>
          <button style={styles.popupButton} onClick={handleClosePopup}>
            shake me more!
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "white",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    padding: "0 15px",
    boxSizing: "border-box",
    overflow: "hidden", // Prevent scrolling
  },
  textContainer: {
    width: "100%",
    textAlign: "center",
    marginTop: "20px",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#333",
    letterSpacing: "1px",
  },
  image: {
    marginTop: "10px",
    width: "auto",
    height: "100vh",
    maxWidth: "100%",
    objectFit: "contain",
    cursor: "pointer",
  },
  popup: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    zIndex: 1000,
    width: "80%",
    maxWidth: "500px",
  },
  popupText: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "10px",
  },
  popupButton: {
    padding: "10px 20px",
    backgroundColor: "#960019",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
  },
};
