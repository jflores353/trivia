import React, { Component } from "react";
import Question from "./Question";

const testQuestion = {
  question: "What is the largest mammal in the world?",
  answer: ["Blue whale", "Walrus", "Giraffe", "Lion"]
};

export default class Game extends Component {
  async componentDidMount() {
    const url = `https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple`;
    try {
      const response = await fetch(url);
      const { results } = await response.json();
      console.log(results);
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return (
      <div>
        <Question question={testQuestion} />
      </div>
    );
  }
}
