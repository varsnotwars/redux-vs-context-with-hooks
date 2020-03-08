export const combineReducers = reducerMap => (state, action) =>
  Object
    // prettier-ignore
    .keys(reducerMap)
    .reduce(
      (newState, reducer) => {
        const reducerState = reducerMap[reducer](state, action);
        return { ...newState, ...reducerState };
      },
      { ...state }
    );
