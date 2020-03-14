import { TOGGLE_STATUS } from "../actions/actionTypes";

export const statusTogglerReducer = (
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
