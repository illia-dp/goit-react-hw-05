import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;

const fetchData = async (endpoint, customParams = {}) => {
  const response = await axios.get(endpoint, {
    params: { language: "en-US", ...customParams },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response;
};

export const getTrendingMoviesAPI = () =>
  fetchData("https://api.themoviedb.org/3/trending/movie/day");

export const getMovieDetailsAPI = (movieId) =>
  fetchData(`https://api.themoviedb.org/3/movie/${movieId}`);

export const getMovieCastAPI = (movieId) =>
  fetchData(`https://api.themoviedb.org/3/movie/${movieId}/credits`);

export const getMovieReviewAPI = (movieId) =>
  fetchData(`https://api.themoviedb.org/3/movie/${movieId}/reviews`);

export const getMoviesByQueryAPI = (query) =>
  fetchData("https://api.themoviedb.org/3/search/movie", { query });
