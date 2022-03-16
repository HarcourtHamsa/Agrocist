import {UPDATE_USER_DATA, USER_AUTHENTICATION, USER_LOGOUT} from '../constant';

const initialUserState = {
  loggedIn: false,
  userDetail: {},
};

const userReducer = (state = initialUserState, action: any) => {
  switch (action.type) {
    case USER_AUTHENTICATION:
      return {
        ...state,
        loggedIn: true,
      };
    case UPDATE_USER_DATA:
      return {
        ...state,
        userDetail: {...state.userDetail, ...action.payload},
      };
    case USER_LOGOUT:
      return {
        ...state,
        loggedIn: false,
        userDetail: {},
      };
    default:
      return state;
  }
};

export default userReducer;
