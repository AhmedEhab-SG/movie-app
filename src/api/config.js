import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.params ||= {};
    config.params.api_key = process.env.REACT_APP_API_KEY;
    return config;
  },
  (error) => {
    return console.log(error);
  }
);

