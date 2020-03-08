import {
  ACTIVATE_UNRELATED,
  DEACTIVATE_UNRELATED
} from "../actions/actionTypes";

export const unrelatedReducer = (state, action) => {
  switch (action.type) {
    case ACTIVATE_UNRELATED:
      return { ...state, active: true };
    case DEACTIVATE_UNRELATED:
      return { ...state, active: false };
    default:
      return state;
  }
};
