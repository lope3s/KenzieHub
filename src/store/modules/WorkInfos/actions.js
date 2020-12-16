import { ADD_WORK } from "./actionType"

export const saveWorkInfos = (workInfos) => ({
  type: ADD_WORK,
  workInfos,
})
