import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';
import api from '../api/api';

export const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user,
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT,
});

export const login = (credentials) => (dispatch) =>
  api.user.login(credentials).then((user) => {
    // need HERRE to extract the cookie and JWT to add user info to the store
    dispatch(userLoggedIn(user));
  });

export const logout = () => (dispatch) => {
  // need HERRE to delete the cookie and reset the redux store
  dispatch(userLoggedOut());
};
