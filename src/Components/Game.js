import React, { Component } from "react";
import Question from "./Question";

const testQuestion = {
  question: "What is the largest mammal in the world?",
  answerChoices: ["Blue whale", "Walrus", "Giraffe", "Lion"]
};

export default class Game extends Component {
  async componentDidMount() {
    const url = `https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple`;
    try {
      const response = await fetch(url);
      const { results } = await response.json();

      const questions = results.map(loadedQuestion => {
        const formattedQuestion = {
          question: loadedQuestion.question,
          answerChoices: [...loadedQuestion.incorrect_answers]
        };

        // This creates a random number to assign to the Correct answer to then splice into the answer choices array
        formattedQuestion.answer = Math.floor(Math.random() * 4);

        formattedQuestion.answerChoices.splice(
          formattedQuestion.answer,
          0,
          loadedQuestion.correct_answer
        );

        return formattedQuestion;
      });
      console.log(results);
      console.log(questions);
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
