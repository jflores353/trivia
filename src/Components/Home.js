import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Quiz App</h1>
      <a href="/game" className="btn">
        Start Game
      </a>
      <a href="/highscores" className="btn">
        High Scores
      </a>
    </div>
  );
}
