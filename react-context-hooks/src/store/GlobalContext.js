import React, { createContext, useReducer } from "react";

import { actionCreators } from "../actions";

export const createGlobalStore = (reducer, initialState) => {
  const GlobalContext = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { ...initialState });

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
