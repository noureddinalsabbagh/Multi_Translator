import { makeQuizArray, selectRandom } from "../../helpers/quizHelpers";

const answersArr = new Array(4).fill({ option: "" })
const INITIAL_STATE = {
  error: "",
  isLoading: true,
  quizData: [
    {
      text: "",
      answers: answersArr
    }
  ],
  score: 0,
  questionIndex: 0
}

const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_QUIZ_START":
      return state

    case "GET_QUIZ_SUCCESS":
      const quizArray = selectRandom(action.payload.userHistory, 10)
      const quizData = makeQuizArray(quizArray)
      return { ...state, isLoading: false, quizData };

    case "GET_QUIZ_ERROR":
      return { ...state, error: action.payload, isLoading: false }
    default:
      return state;
  }
}

export default quizReducer;