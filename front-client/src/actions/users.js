import api from "../api";
import { userLoggedIn } from "./auth";

import { USER_UPDATED, USER_FETCHED } from "../types";

// eslint-disable-next-line import/prefer-default-export
export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.vemzuluJWT = user.token;
    dispatch(userLoggedIn(user));
  });

export const userUpdated = user => ({
  type: USER_UPDATED,
  user
});

export const userFetched = user => ({
  type: USER_FETCHED,
  user
});

export const updateUser = (id, data) => dispatch => {
  console.log("User to update and data: ", id, data);
  api.user.updateById(id, data).then(requestdata => {
    localStorage.vemzuluJWT = requestdata.data.user.token;
    dispatch(userUpdated(requestdata.data.user));
  });
}

export const getUserDetails = id => dispatch =>
  api.user.getById(id).then(requestdata => {
    localStorage.vemzuluJWT = requestdata.data.user.token;
    dispatch(userFetched(requestdata.data.user));
  });

  //export const fetchUserAircrafts = id => dispach =>
  
