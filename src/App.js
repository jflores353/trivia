import React from "react";

import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./Components/Home";
import Game from "./Components/Game";
import HighScores from "./Components/HighScores";

function App() {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/highscores" component={HighScores} />
      </div>
    </Router>
  );
}

export default App;
