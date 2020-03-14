import { INCREMENT, DECREMENT, TOGGLE_STATUS } from "./actionTypes";

export const increment = dispatch => amount =>
  dispatch({ type: INCREMENT, payload: amount });

export const decrement = dispatch => amount =>
  dispatch({ type: DECREMENT, payload: amount });

export const toggleStatus = dispatch => status =>
  dispatch({ type: TOGGLE_STATUS, payload: status });
