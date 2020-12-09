import { ADD_USER } from "./actionType";

export const addUsers = (userList) => ({
  type: ADD_USER,
  userList,
});
