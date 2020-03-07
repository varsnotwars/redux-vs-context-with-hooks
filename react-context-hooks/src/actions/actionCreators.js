import { INCREMENT, DECREMENT } from "./actionTypes";

export const increment = dispatch => amount =>
  dispatch({ type: INCREMENT, payload: amount });

export const decrement = dispatch => amount =>
  dispatch({ type: DECREMENT, payload: amount });
