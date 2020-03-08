import React, { createContext, useReducer } from "react";

import { actionCreators } from "../actions";

import { counterReducer } from "../reducers/counterReducer";
import { unrelatedReducer } from "../reducers/unrelatedReducer";
import { combineReducers } from "../store/combineReducers";

const reducerMap = {
  counter: counterReducer,
  unrelated: unrelatedReducer
};

const rootReducer = combineReducers(reducerMap);
const initialState = Object.keys(reducerMap).reduce((acc, cur) => {
  return { ...acc, [cur]: reducerMap[cur]() };
}, {});

export const createGlobalStore = () => {
  const GlobalContext = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, { ...initialState });

    const boundActionCreators = Object
      // prettier-ignore
      .keys(actionCreators)
      .reduce(
        (map, acName) => ({
          ...map,
          [acName]: actionCreators[acName](dispatch)
        }),
        {}
      );

    return (
      <GlobalContext.Provider value={{ state, ...boundActionCreators }}>
        {children}
      </GlobalContext.Provider>
    );
  };

  return { GlobalContext, Provider };
};
