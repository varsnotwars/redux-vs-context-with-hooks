export const createInitialState = reducerMap =>
  Object.keys(reducerMap).reduce((acc, cur) => {
    return { ...acc, [cur]: reducerMap[cur]() };
  }, {});
