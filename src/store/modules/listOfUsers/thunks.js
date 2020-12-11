import { addUsers } from "./actions"

const addUserThunk = (userList) => (dispatch, getState) => {
  const { listOfUsers } = getState()
  const newList = [...listOfUsers, ...userList]
  dispatch(addUsers(newList))
}

export default addUserThunk
