import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Quiz App</h1>
      <Link to="/game" className="btn">
        Start Game
      </Link>
      <Link to="/highscores" className="btn">
        High Scores
      </Link>
    </div>
  );
}
