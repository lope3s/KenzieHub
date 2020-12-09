import { ADD_USER } from "./actionType"

const ListOfUsersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      const { userArr } = action
      return userArr

    default:
      return state
  }
}

export default ListOfUsersReducer
