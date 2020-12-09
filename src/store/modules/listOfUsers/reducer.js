import { ADD_USER } from "./actionType"

const ListOfUsersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      const { userList } = action
      return userList

    default:
      return state
  }
}

export default ListOfUsersReducer
