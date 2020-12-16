import { ADD_TECH } from "./actionTYpe"

export const saveTechInfos = (techInfos) => ({
  type: ADD_TECH,
  techInfos,
})
