import { VALID } from "./actionType"

const validationReducer = (state = false, action) => {
  switch (action.type) {
    case VALID:
      const { auth } = action
      return auth

    default:
      return state
  }
}

export default validationReducer
