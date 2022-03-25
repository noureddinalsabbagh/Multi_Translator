const INITIAL_STATE = {
  translations: [],
  userHistory: [],
  error: '',
  isLoading: true,
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // translate cases
    case 'TRANSLATE_START':
      return state;
    case 'TRANSLATE_SUCCESS':
      console.log(action.payload.translations);
      return {
        ...state,
        translations: action.payload.translations,
        isLoading: false,
      };
    case 'TRANSLATE_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    // translate history cases
    case 'TRANSLATE_HISTORY_START':
      return state;
    case 'TRANSLATE_HISTORY_SUCCESS':
      console.log(action.payload.userHistory);
      return {
        ...state,
        userHistory: action.payload.userHistory,
        isLoading: false,
      };
    case 'TRANSLATE_HISTORY_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default homeReducer;
