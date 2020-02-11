import React, { Component } from "react";
import Question from "./Question";
import { loadQuestions } from "../Helpers/QuestionsHelper";
import HUD from "./HUD"

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      currentQuestion: null,
      loading: true,
      score: 0,
      questionNumber: 0
    };
  }

  async componentDidMount() {
    try {
      const questions = await loadQuestions();
      // console.log(questions);
      // Set state to values from fetch mapping, questions : questions same as { questions } since they are the same
      this.setState(
        {
          questions
        },
        () => {
          this.changeQuestion();
        }
      );
    } catch (err) {
      console.error(err);
    }
  }

  changeQuestion = (bonus = 0) => {
    const randomQuestionIndex = Math.floor(
      Math.random() * this.state.questions.length
    );
    const currentQuestion = this.state.questions[randomQuestionIndex];
    const remainingQuestions = [...this.state.questions];
    this.setState(prevState => ({
      questions: remainingQuestions,
      currentQuestion: currentQuestion,
      loading: false,
      score: (prevState.score += bonus),
      questionNumber: prevState.questionNumber + 1
    }));
    console.log(this.state.score);
  };

  render() {
    return (
      <>
        {this.state.loading && <div id="loader" />}
        <HUD score={this.state.score} questionNumber={this.state.questionNumber}/>
        {!this.state.loading && this.state.currentQuestion && (
          <Question
            question={this.state.currentQuestion}
            changeQuestion={this.changeQuestion}
          />
        )}
      </>
    );
  }
}
