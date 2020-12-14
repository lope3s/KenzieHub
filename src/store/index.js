import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import ListOfUsersReducer from "./modules/listOfUsers/reducer"
import validationReducer from "./modules/validationToken/reducer"
import techIDReducer from "./modules/techId/reducer"

const reducers = combineReducers({
  listOfUsers: ListOfUsersReducer,
  auth: validationReducer,
  techID: techIDReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
