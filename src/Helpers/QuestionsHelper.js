export const loadQuestions = async () =>
  // amount = 3,
  // category = 9,
  // difficulty = "easy",
  // type = "multiple"
  {
    const url = `https://opentdb.com/api.php?amount=10`;
    try {
      const response = await fetch(url);
      const { results } = await response.json();
      return convertQuestionsFromApi(results);
    } catch (err) {
      console.error(err);
    }
  };

const convertQuestionsFromApi = rawQuestions => {
  return rawQuestions.map(loadedQuestion => {
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
};
