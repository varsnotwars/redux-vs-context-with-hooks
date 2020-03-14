import { TOGGLE_STATUS } from "../actions/actionTypes";

export const unrelatedReducer = (
  state = { active: false },
  action = { type: null }
) => {
  switch (action.type) {
    case TOGGLE_STATUS:
      return { ...state, active: action.payload };
    default:
      return state;
  }
};
