import { counterReducer } from "./counterReducer";
import { unrelatedReducer } from "./unrelatedReducer";
import { combineReducers } from "../store/combineReducers";

export const rootReducer = combineReducers({
  counterReducer,
  unrelatedReducer
});
