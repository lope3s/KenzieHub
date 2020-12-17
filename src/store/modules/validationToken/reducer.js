import { VALID } from "./actionType"

const validationReducer = (state = null, action) => {
  switch (action.type) {
    case VALID:
      const { auth } = action
      return auth

    default:
      return state
  }
}

export default validationReducer
