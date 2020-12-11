import { VALID } from "./actionType"

export const validation = (auth) => ({
  type: VALID,
  auth,
})
