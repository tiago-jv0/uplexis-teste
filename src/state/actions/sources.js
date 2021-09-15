// import SourcesMapper from "../../infrastructure/mappers/sources.js";
import SourcesMapper from "../../infrastructure/mappers/sources.js";
import httpClient from "../../infrastructure/services/http-client.js";

export default {
  async GET_SOURCES({ commit, getters }) {
    const url = "/sources";

    const apiResponse = await httpClient.get({ url });

    const icons = getters.icons;

    const apiResponseFormatted = JSON.parse(
      apiResponse
        .replaceAll(/\s\s+/g, "")
        .replaceAll(/,}/g, "}")
        .replace(/Imóveis",{/, 'Imóveis" },     {')
    );

    const sources = SourcesMapper.fromApiToApp(
      apiResponseFormatted.sources,
      icons
    );

    commit({
      type: "UPDATE_SOURCES",
      payload: sources,
    });
  },
};
