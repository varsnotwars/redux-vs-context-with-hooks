import {
  ACTIVATE_UNRELATED,
  DEACTIVATE_UNRELATED
} from "../actions/actionTypes";

export const unrelatedReducer = (
  state = { active: false },
  action = { type: null }
) => {
  switch (action.type) {
    case ACTIVATE_UNRELATED:
      return { ...state, active: true };
    case DEACTIVATE_UNRELATED:
      return { ...state, active: false };
    default:
      return state;
  }
};
