import React from "react";
import "./TypingChallenge.css";
import TestLetter from "../TestLetter/TestLetter";

const TypingChallenge = ({
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
}) => {
  return (
    <div className="typing-challenge">
      <div className="timer-container">
        <p className="timer">
          00:
          {timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
        </p>
        <p className="timer-info">
          {!timerStarted && "Start typing to start the test"}
        </p>
      </div>
      <div className="textarea-container">
        <div
          className="textarea-left"
          onCopy={(e) => {
            e.preventDefault();
          }}
        >
          <div className="textarea test-paragraph">
            {testInfo.map((individualLetterInfo, index) => {
              return (
                <TestLetter
                  key={index}
                  individualLetterInfo={individualLetterInfo}
                />
              );
            })}
          </div>
        </div>
        <div
          className="textarea-right"
          onPaste={(e) => {
            e.preventDefault();
            return false;
          }}
        >
          <textarea
            onChange={(e) => onInputChange(e.target.value)}
            className="textarea"
            placeholder="Start typing here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};
export default TypingChallenge;
