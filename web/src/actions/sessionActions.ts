import * as APIUtil from '../util/sessionApiUtil';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

const receiveCurrentUser = (currentUser: any) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveUserSignIn = () => ({
  type: RECEIVE_USER_SIGN_IN
});

const removeSessionErrors = () => ({
  type: REMOVE_SESSION_ERRORS
});

const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

const receiveUsers = (users: any) => ({
  type: RECEIVE_ALL_USERS,
  users
})
