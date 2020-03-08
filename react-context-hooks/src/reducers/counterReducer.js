import { INCREMENT, DECREMENT } from "../actions/actionTypes";

export const counterReducer = (
  state = { count: 0 },
  action = { type: null }
) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};
