export const createInitialState = reducerMap =>
  Object.keys(reducerMap).reduce(
    (globalState, reducerName) => ({
      ...globalState,
      // calling reducer with no args will init with default values
      [reducerName]: reducerMap[reducerName]()
    }),
    {}
  );
