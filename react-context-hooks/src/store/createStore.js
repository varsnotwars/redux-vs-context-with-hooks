import { createGlobalStore } from "./GlobalContext";
import { reducerMap } from "../reducers";

import { createInitialState } from "./createInitialState";
import { createRootReducer } from "./createRootReducer";

const initialState = createInitialState(reducerMap);
const rootReducer = createRootReducer(reducerMap);

export const { GlobalContext, Provider } = createGlobalStore(
  rootReducer,
  initialState
);
