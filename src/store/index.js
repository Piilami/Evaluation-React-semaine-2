import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";

import taskReducer from "./reducers/taskReducer.js";

const store = createStore(
  combineReducers({
      tasks: taskReducer,
  }),
  // composeWithDevTools(
  //     applyMiddleware(thunk, logMiddleware, coupleMiddleware)
  // )
)

export default store