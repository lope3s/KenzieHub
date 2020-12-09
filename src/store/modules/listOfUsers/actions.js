import { ADD_USER } from "./actionType"

export const addUsers = (userArr) => ({
  type: ADD_USER,
  userArr,
})
