const INITIAL_STATE = {
  isLoading: true,
  data: [],
  message: '',
  error: '',
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //Login cases
    case 'SEND_LOGIN_START':
      return state;
    case 'SEND_LOGIN_SUCCESS':
      return { ...state, message: action.payload, isLoading: false };
    case 'SEND_LOGIN_ERROR':
      return { ...state, error: action.payload, isLoading: false };

    //Register Cases

    case 'SEND_REGISTER_START':
      return state;
    case 'SEND_REGISTER_SUCCESS':
      return { ...state, message: action.payload, isLoading: false };
    case 'SEND_REGISTER_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default userReducer;
