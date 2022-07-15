import axios from "axios";

interface ApiProps {
  fullResponse?: boolean;
  headers?: any;
}

const api = (props?: ApiProps): any => {
  const apiCall = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
  });

  apiCall.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params["api_key"] = "86c42f9bd5b5b31ff86ff0f5a8fc2851";
    // config.params["language"] = "pt-BR";
    return config;
  });
  apiCall.interceptors.response.use(
    (response: any) => response,
    async (error: any) => {
      const { response } = error;

      return Promise.reject(response);
    }
  );

  return apiCall;
};

export { default as to } from "@utils/awaitTo";

export default api;
