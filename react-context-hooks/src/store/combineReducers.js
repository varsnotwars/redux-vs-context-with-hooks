export const combineReducers = reducerMap => (state, action) =>
  Object
    // prettier-ignore
    .keys(reducerMap)
    .reduce(
      (globalState, reducer) => {
        const reducerSandboxState = state[reducer];

        const newSandboxState = reducerMap[reducer](
          reducerSandboxState,
          action
        );

        return {
          ...globalState,
          [reducer]: newSandboxState
        };
      },
      { ...state }
    );
