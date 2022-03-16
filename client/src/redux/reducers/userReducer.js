const INITIAL_STATE = {
  isLoading: true,
  data: [],
  message: '',
  error: '',
  isLoggedIn: false
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //Login cases
    case 'SEND_LOGIN_START':
      return state;
    case 'SEND_LOGIN_SUCCESS':
      return { ...state, message: action.payload, isLoading: false, isLoggedIn: true };
    case 'SEND_LOGIN_ERROR':
      return { ...state, error: action.payload, isLoading: false };

    //Register Cases

    case 'SEND_REGISTER_START':
      return state;
    case 'SEND_REGISTER_SUCCESS':
      return { ...state, message: action.payload, isLoading: false };
    case 'SEND_REGISTER_ERROR':
      return { ...state, error: action.payload, isLoading: false };

    // to check IsLoggedIn
    case 'GET_ISLOGGEDIN_START':
      return state
    case 'GET_ISLOGGEDIN_SUCCESS':
      return { ...state, isLoggedIn: action.payload.isLoggedIn, isLoading: false };
    case 'GET_ISLOGGEDIN_ERROR':
      return { ...state, isLoggedIn: false, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
