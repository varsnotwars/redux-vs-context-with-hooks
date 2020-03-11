import React, { createContext, useReducer } from "react";
import { mapDispatchToActions } from "././mapDispatchToActions";
import { actionCreators } from "../actions";

export const createGlobalStore = (reducer, initialState) => {
  const GlobalContext = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { ...initialState });

    const boundActionCreators = mapDispatchToActions(dispatch, actionCreators);

    return (
      <GlobalContext.Provider value={{ state, ...boundActionCreators }}>
        {children}
      </GlobalContext.Provider>
    );
  };

  return { GlobalContext, Provider };
};
