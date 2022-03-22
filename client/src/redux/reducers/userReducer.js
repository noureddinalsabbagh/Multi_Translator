const INITIAL_STATE = {
  isLoading: true,
  data: {},
  message: '',
  error: '',
  isLoggedIn: false,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //Login cases
    case 'SEND_LOGIN_START':
      return state;
    case 'SEND_LOGIN_SUCCESS':
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        isLoggedIn: true,
      };
    case 'SEND_LOGIN_ERROR':
      return { ...state, error: action.payload, isLoading: false };

    //Register Cases

    case 'SEND_REGISTER_START':
      return state;
    case 'SEND_REGISTER_SUCCESS':
      return { ...state, message: action.payload, isLoading: false };
    case 'SEND_REGISTER_ERROR':
      return { ...state, error: action.payload, isLoading: false };

    // verify user cases

    case 'VERIFY_USER_START':
      return state;
    case 'VERIFY_USER_SUCCESS':
      return { ...state, message: action.payload.msg, isLoading: false };
    case 'VERIFY_USER_ERROR':
      return { ...state, error: action.payload, isLoading: false };

    // to check IsLoggedIn
    case 'GET_ISLOGGEDIN_START':
      return state;
    case 'GET_ISLOGGEDIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        isLoading: false,
      };
    case 'GET_ISLOGGEDIN_ERROR':
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        error: action.payload,
      };

    // to update user creds
    case 'SEND_NEWCREDS_START':
      return state;
    case 'SEND_NEWCREDS_SUCCESS':
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        isLoggedIn: true,
      };
    case 'SEND_NEWCREDS_ERROR':
      return { ...state, error: action.payload, isLoading: false };


    default:
      return state;
  }
};

export default userReducer;
