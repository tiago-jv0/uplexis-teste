import AppsMapper from "../../infrastructure/mappers/apps";
import httpClient from "../../infrastructure/services/http-client";

export default {
  async GET_APPS({ commit, getters }) {
    const url = "/apps";

    const apiResponse = await httpClient.get({ url });
    const icons = getters.icons;

    const apps = AppsMapper.fromApiToApp(apiResponse.apps, icons);

    commit({
      type: "UPDATE_APPS",
      payload: apps,
    });
  },
};
