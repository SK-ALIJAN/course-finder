import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import courseReducer from "./Reducer/courseReducer";
import studentReducer from "./Reducer/studentReducer";

const rootReducer = combineReducers({
  courses: courseReducer,
  student: studentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
