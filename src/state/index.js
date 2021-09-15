import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const INITIAL_STATE = () => ({
  sources: [],
  apps: [],
  icons: [],
});

const rootStore = {
  actions,
  mutations,
  getters,
  state: INITIAL_STATE(),
};

export default rootStore;
