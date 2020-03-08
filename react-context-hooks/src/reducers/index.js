import { counterReducer } from "../reducers/counterReducer";
import { unrelatedReducer } from "../reducers/unrelatedReducer";

export const reducerMap = {
  counter: counterReducer,
  unrelated: unrelatedReducer
};
