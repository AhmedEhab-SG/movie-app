import { axiosInstance } from "./config";

export const getMoviesPage = (page) => {
  return axiosInstance.get("/movie/popular", {
    params: {
      page: page,
    },
  });
};

export const getSearchMovie = (movieName) => {
  return axiosInstance.get("/serach/movie", {
    params: {
      query: movieName,
    },
  });
};

export const getMovieDetails = (id) => {
  return axiosInstance.get(`/movie/${id}`);
};
