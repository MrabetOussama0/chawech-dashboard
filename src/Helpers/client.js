import axios from "axios";
import { refreshTokenEndPoint } from "Helpers/Constants";
import { getToken, removeToken, setToken } from "./token_helper";

const baseURL = process.env.REACT_APP_API_URL;
const refreshToken = async () => {
  try {
    const token = getToken();
    const axiosInstance = axios.create({
      baseURL: baseURL,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await axiosInstance.post(refreshTokenEndPoint);
    const newToken = response.data.token;
    setToken(newToken);
    return newToken;
  } catch (error) {
    removeToken();
    window.location.href = "/login";
  }
};

const getAxiosInstance = () => {
  const instance = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Add a response interceptor to retry the request
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const { config, response } = error;
      if (response) {
        config.__retryCount = config.__retryCount || 0;
        if (config.__retryCount >= 3) {
          return Promise.reject(error);
        }
        config.__retryCount += 1;
        const delay = config.__retryCount * 1000;
        if (response.status === 401) {
          const token = await refreshToken();
          config.headers["Authorization"] = `Bearer ${token}`;
          return new Promise((resolve) =>
            setTimeout(() => resolve(instance(config)), delay)
          );
        } else {
          return new Promise((resolve) =>
            setTimeout(() => resolve(instance(config)), delay)
          );
        }
      } else {
        return Promise.reject(error);
      }
    }
  );
  return instance;
};

const axiosClient = getAxiosInstance();

export default axiosClient;
