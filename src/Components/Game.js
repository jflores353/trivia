import React, { Component } from "react";
import Question from "./Question";
import { loadQuestions } from "../Helpers/QuestionsHelper";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      currentQuestion: null
    };
  }

  async componentDidMount() {
    try {
      const questions = await loadQuestions();
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
