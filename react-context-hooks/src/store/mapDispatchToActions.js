export const mapDispatchToActions = (dispatch, actionCreators) =>
  Object.keys(actionCreators).reduce(
    (map, acName) => ({
      ...map,
      [acName]: actionCreators[acName](dispatch)
    }),
    {}
  );
