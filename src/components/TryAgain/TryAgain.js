import React from "react";
import "./TryAgain.css";

const TryAgain = ({ words, characters, wpm, startAgain }) => {
  return (
    <div className="try-again-container">
      <h1>Test Results</h1>

      <div className="result-container">
        <p>
          <b>Characters:</b> {characters}
        </p>
        <p>
          <b>Words:</b> {words}
        </p>
        <p>
          <b>Speed:</b> {wpm} wpm
        </p>
      </div>
      <div className="buttons">
        <div>
          <button
            onClick={() => {
              startAgain();
              window.scrollTo(0, 0);
            }}
            className="end-buttons start-again-btn"
          >
            Re-try
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              window.open(
                "https://linkedin.com/post?url=Mukul",
                "linkedin-share-dialog",
                "width=800, height=600"
              );
            }}
            className="end-buttons share-btn"
          >
            Share
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              window.open(
                "https://twitter.com/intent/tweet?text=MukulKolpe.com",
                "Twitter",
                "width=800, height=600"
              );
            }}
            className="end-buttons tweet-btn"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};
export default TryAgain;
