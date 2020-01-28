import React, { Component } from "react";
import Question from "./Question";

const testQuestion = {
  question: "What is the largest mammal in the world?",
  answer: ["Blue whale", "Walrus", "Giraffe", "Lion"]
};

export default class Game extends Component {
  render() {
    return (
      <div>
        <Question question={testQuestion} />
      </div>
    );
  }
}
