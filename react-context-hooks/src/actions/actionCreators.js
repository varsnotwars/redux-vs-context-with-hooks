import {
  INCREMENT,
  DECREMENT,
  ACTIVATE_UNRELATED,
  DEACTIVATE_UNRELATED
} from "./actionTypes";

export const increment = dispatch => amount =>
  dispatch({ type: INCREMENT, payload: amount });

export const decrement = dispatch => amount =>
  dispatch({ type: DECREMENT, payload: amount });

export const activateUnrelated = dispatch => () =>
  dispatch({ type: ACTIVATE_UNRELATED });

export const deactivateUnrelated = dispatch => () =>
  dispatch({ type: DEACTIVATE_UNRELATED });
