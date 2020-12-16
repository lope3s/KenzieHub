import { ADD_WORK } from "./actionType"

const workInfosReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_WORK:
      const { workInfos } = action
      return workInfos

    default:
      return state
  }
}

export default workInfosReducer
