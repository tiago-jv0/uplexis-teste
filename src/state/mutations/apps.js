export default {
  async UPDATE_APPS(state, { payload }) {
    state.apps = payload;
  },
};
