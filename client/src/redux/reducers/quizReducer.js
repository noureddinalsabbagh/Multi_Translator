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
  optionInfo: { showCorrect: false, showFalse: false, optionObj: {} },
  clickable: true,
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

    case 'SHOW_OPTION_INFO_CORRECT':
      return {
        ...state,
        isLoading: false,
        optionInfo: {
          ...state.optionInfo,

          showCorrect: true,
          optionObj: action.payload,
        },
      };
    case 'SHOW_OPTION_INFO_FALSE':
      return {
        ...state,
        isLoading: false,
        optionInfo: {
          ...state.optionInfo,
          isLoading: false,
          showFalse: true,
          optionObj: action.payload,
        },
      };
    case 'CLOSE_OPTION_INFO':
      return {
        ...state,
        isLoading: false,
        optionInfo: {
          ...state.optionInfo,
          showFalse: false,
          showCorrect: false,
        },
      };

    case 'CHANGE_CLICKABLE_TRUE':
      return { ...state, isLoading: false, clickable: true };

    case 'CHANGE_CLICKABLE_FALSE':
      return { ...state, isLoading: false, clickable: false };

    default:
      return state;
  }
};

export default quizReducer;
