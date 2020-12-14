import { ADD_ID } from "./actionTYpe"

const techIDReducer = (state = "", action) => {
  switch (action.type) {
    case ADD_ID:
      const { id } = action
      return id

    default:
      return state
  }
}

export default techIDReducer
