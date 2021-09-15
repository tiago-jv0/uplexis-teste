export default {
  async UPDATE_SOURCES(state, { payload }) {
    state.sources = payload;
  },
};
