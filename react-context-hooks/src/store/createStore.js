import { createGlobalStore } from "./GlobalContext";

export const { GlobalContext, Provider } = createGlobalStore({
  count: 0,
  active: false
});
