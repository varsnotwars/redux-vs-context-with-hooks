import React, { createContext, useReducer } from "react";
import { mapDispatchToActions } from "././mapDispatchToActions";
import { actionCreators } from "../actions";

export const createGlobalStore = (globalReducer, globalInitialState) => {
  const GlobalContext = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, globalInitialState);

    const boundActionCreators = mapDispatchToActions(dispatch, actionCreators);

    return (
      <GlobalContext.Provider value={{ state, ...boundActionCreators }}>
        {children}
      </GlobalContext.Provider>
    );
  };

  return { GlobalContext, Provider };
};
