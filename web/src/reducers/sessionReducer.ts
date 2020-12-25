import { 
  RECEIVE_CURRENT_USER, 
  RECEIVE_USER_LOGOUT, 
  RECEIVE_USER_SIGN_IN 
} from '../actions/sessionActions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

type SessionAction = {
   type: typeof RECEIVE_CURRENT_USER | typeof RECEIVE_USER_LOGOUT | typeof RECEIVE_USER_SIGN_IN,
   currentUser: any
}

const sessionReducer = (state = initialState, action: SessionAction) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true
      };
    default:
      return state;
  }
};

export default sessionReducer;