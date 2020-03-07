import React, { createContext, useReducer } from "react";

import { actionCreators } from "../actions";
import { reducers } from "../reducers";
const { counterReducer } = reducers;
export const createGlobalStore = initialState => {
  const GlobalContext = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

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
