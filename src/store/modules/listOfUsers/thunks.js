import { addUsers } from "./actions"

const addUserThunk = (userList) => (dispatch, getState) => {
  const { listOfUsers } = getState()
  const newList = [...listOfUsers, ...userList]

  if(userList.length > 0){
    dispatch(addUsers(newList))
    return
  }
  if(userList.length === 0){
    dispatch(addUsers(userList))
  }
}

export default addUserThunk
