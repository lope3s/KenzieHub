import { ADD_TECH } from "./actionType"

export const saveTechInfos = (techInfos) => ({
  type: ADD_TECH,
  techInfos,
})
