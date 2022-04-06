import { makeQuizArray, selectRandom } from '../../helpers/quizHelpers';

const INITIAL_STATE = {
  error: '',
  isLoading: true,
  quizData: [
    {
      text: '',
      answers: [],
    },
  ],
  score: 0,
  questionIndex: 0,
  optionInfo: { showCorrect: false, showFalse: false, optionObj: {} }
};

const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_QUIZ_START':
      return state;

    case 'GET_QUIZ_SUCCESS':
      const quizArray = selectRandom(action.payload.userHistory, 10);
      const quizData = makeQuizArray(quizArray);
      return { ...state, isLoading: false, quizData };

    case 'GET_QUIZ_ERROR':
      return { ...state, error: action.payload, isLoading: false };

    case 'INCREASE_INDEX':
      return {
        ...state,
        isLoading: false,
        questionIndex: state.questionIndex + 1,
      };

    case 'SET_SCORE':
      return action.payload.isCorrect === true
        ? {
          ...state,
          isLoading: false,
          score: state.score + 1,
        }
        : { ...state, isLoading: false };
    case "SHOW_OPTION_INFO_CORRECT":
      return { ...state, optionInfo: { ...state.optionInfo, showCorrect: true, showFalse: false, optionObj: action.payload } }
    case "SHOW_OPTION_INFO_FALSE":
      return { ...state, optionInfo: { ...state.optionInfo, showFalse: true, showCorrect: false, optionObj: action.payload } }
    case "CLOSE_OPTION_INFO":
      return { ...state, optionInfo: { ...state.optionInfo, showFalse: false, showCorrect: false } }
    default:
      return state;
  }
};

export default quizReducer;
