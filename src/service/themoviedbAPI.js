import axios from "axios";

const fetchData = async (endpoint, customParams = {}) => {
  const response = await axios.get(endpoint, {
    params: { language: "en-US", ...customParams },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjZiYjc4MGI5NjM4ZmRmMWM5YjcyNmM0OTY4ZTkxYSIsIm5iZiI6MTc0OTU1MjQxOC4wMDE5OTk5LCJzdWIiOiI2ODQ4MGQyMThjZTcyNTJmMzc5ZjUzZWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.JgRpsgvhjerkL8OuzxoWb-0GZ3V3GlVmsEJceJrWu20",
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
