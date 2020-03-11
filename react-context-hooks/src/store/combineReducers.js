export const combineReducers = reducerMap => (state, action) =>
  Object.keys(reducerMap).reduce(
    (globalState, reducer) => {
      const reducerSandboxState = state[reducer];

      const newSandboxState = reducerMap[reducer](reducerSandboxState, action);

      return {
        ...globalState,
        [reducer]: newSandboxState
      };
    },
    { ...state }
  );
