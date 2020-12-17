import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import ListOfUsersReducer from "./modules/listOfUsers/reducer"
import validationReducer from "./modules/validationToken/reducer"
import techInfosReducer from "./modules/techInfos/reducer"
import workInfosReducer from "./modules/WorkInfos/reducer"

const reducers = combineReducers({
  listOfUsers: ListOfUsersReducer,
  auth: validationReducer,
  techInfos: techInfosReducer,
  workInfos: workInfosReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
