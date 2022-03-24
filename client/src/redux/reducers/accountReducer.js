const INITIAL_STATE = {
  user: { username: '', email: '', languages: [] },
  error: '',
  restLangs: [],
};
const languagesArray = [
  'de',
  'es',
  'ar',
  'tr',
  'it',
  'pt',
  'jp',
  'el',
  'he',
  'ru',
];
const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // to send user creds to frontend
    case 'GET_USERCREDS_START':
      return state;

    case 'GET_USERCREDS_SUCCESS':
      const restLangs = languagesArray.filter(
        (item) => !action.payload.user.languages.includes(item)
      );
      return {
        ...state,
        user: { ...action.payload.user, password: '' },
        restLangs,
      };

    case 'GET_USERCREDS_ERROR':
      return { ...state, error: action.payload };

    case 'DISCARD_LANGUAGES':
      const { languages } = state.user;
      const updatedLangauges = languages.filter(
        (item, index) => index !== action.payload
      );
      const discardedLang = languages[action.payload];
      return {
        ...state,
        user: { ...state.user, languages: [...updatedLangauges] },
        restLangs: [...state.restLangs, discardedLang],
      };

    case 'ADD_LANGUAGES':
      const additionLang = state.restLangs[action.payload];
      const restLanguages = state.restLangs.filter(
        (item, index) => index !== action.payload
      );
      return {
        ...state,
        user: {
          ...state.user,
          languages: [...state.user.languages, additionLang],
        },
        restLangs: [...restLanguages],
      };

    case 'UPDATE_CREDS':
      return { ...state, user: { ...state.user, ...action.payload } };
    default:
      return state;
  }
};

export default accountReducer;
