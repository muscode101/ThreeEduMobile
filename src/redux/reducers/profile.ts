import {UserModel, UserState} from "../models";
import {AUTH_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, USER_LOADED} from "../actions/types";

const initialState: UserState = {
  user: {} as UserModel,
  error: undefined,
  isAuthenticated: false,
};

export default function (state = initialState, action) {
  const {type, payload} = action
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        loading: false,
        user: payload
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      }
    case AUTH_FAIL:
    case LOGOUT:
    case LOGIN_FAIL:
    default:
      return state
  }
}
