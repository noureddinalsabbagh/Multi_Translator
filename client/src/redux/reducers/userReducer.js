import toast from "react-hot-toast";

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
      return { ...state, message: "" };
    case 'SEND_LOGIN_SUCCESS':
      if (action.payload.msg) toast.success(action.payload.msg)
      return {
        ...state,
        message: action.payload.msg,
        isLoading: false,
        isLoggedIn: true,
      };
    case 'SEND_LOGIN_ERROR':
      return { ...state, error: action.payload, isLoading: false, message: action.message };

    //Register Cases

    case 'SEND_REGISTER_START':
      return { ...state, message: "" };
    case 'SEND_REGISTER_SUCCESS':
      if (action.payload.msg) toast.success(action.payload.msg);
      return { ...state, message: action.payload.msg, isLoading: false };
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
      return { ...state, message: "" };
    case 'SEND_NEWCREDS_SUCCESS':
      if (action.payload) toast.success(action.payload)
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        isLoggedIn: true,
      };
    case 'SEND_NEWCREDS_ERROR':
      return { ...state, error: action.payload, isLoading: false };

    // Logout Cases
    case 'LOGOUT_START':
      return { ...state, message: "" };

    case 'LOGOUT_SUCCESS':
      toast.success(action.payload.msg)
      return {
        ...state,
        isLoggedIn: false,
        message: action.payload.msg,
        isLoading: false,
      };

    case 'LOGOUT_ERROR':
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
