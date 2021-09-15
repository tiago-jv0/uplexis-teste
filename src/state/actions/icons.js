import httpClient from "../../infrastructure/services/http-client.js";

export default {
  async GET_ICONS({ commit }) {
    const url = "/icons";

    const apiResponse = await httpClient.get({ url });

    commit({
      type: "UPDATE_ICONS",
      payload: apiResponse.icons,
    });
  },
};
