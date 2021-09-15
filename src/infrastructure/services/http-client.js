import axios from "axios";

axios.defaults.baseURL = "https://demo4537116.mockable.io/";

class AxiosAdapter {
  async post({ url, body, headers }) {
    const apiResponse = await axios.post(url, body, { headers });
    return apiResponse.data;
  }

  async get({ url, headers }) {
    const apiResponse = await axios.get(url, { headers });
    return apiResponse.data;
  }
  async put({ url, body, headers }) {
    const apiResponse = await axios.put(url, body, { headers });
    return apiResponse.data;
  }

  async delete({ url, headers }) {
    const apiResponse = await axios.delete(url, { headers });
    return apiResponse.data;
  }
}

export default new AxiosAdapter();
