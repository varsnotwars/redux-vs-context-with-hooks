import { counterReducer } from "../reducers/counterReducer";
import { statusTogglerReducer } from "../reducers/statusTogglerReducer";

export const reducerMap = {
  counter: counterReducer,
  statusToggler: statusTogglerReducer
};
