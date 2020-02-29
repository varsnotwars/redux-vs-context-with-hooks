import { INCREMENT, DECREMENT } from "./actionTypes";

export const increment = amount => ({ type: INCREMENT, payload: amount });

export const decrement = amount => ({ type: DECREMENT, payload: amount });
