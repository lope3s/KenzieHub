import { ADD_TECH } from "./actionType"

const techInfosReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TECH:
      const { techInfos } = action
      return techInfos

    default:
      return state
  }
}

export default techInfosReducer
