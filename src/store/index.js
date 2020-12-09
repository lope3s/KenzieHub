import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import ListOfUsersReducer from "./modules/listOfUsers/reducer"

const reducers = combineReducers({
  listOfUsers: ListOfUsersReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
