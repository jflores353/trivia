import React, { Component } from "react";
import Question from "./Question";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      currentQuestion: null
    };
  }

  async componentDidMount() {
    const url = `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`;
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
      // console.log(results);
      console.log(questions);
      // Set state to values from fetch mapping, questions : questions same as { questions } since they are the same
      this.setState({ questions, currentQuestion: questions[0] });
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return (
      <>
        {this.state.currentQuestion && (
          <Question question={this.state.currentQuestion} />
        )}
      </>
    );
  }
}
