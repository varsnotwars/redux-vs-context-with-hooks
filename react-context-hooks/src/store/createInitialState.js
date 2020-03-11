export const createInitialState = reducerMap =>
  Object.keys(reducerMap).reduce(
    (globalState, reducerName) => ({
      ...globalState,
      // call reducer with no args
      // this will create sandboxed state for each reducer with initial state defined in resolver
      [reducerName]: reducerMap[reducerName]()
    }),
    {}
  );
