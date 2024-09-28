import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTQzNmE1YjY5MjZjNmEyYWZjYzFhMThjZGY2MWE4YyIsIm5iZiI6MTcyNzQ0OTUwMC45NDcxMjIsInN1YiI6IjY2ZjU1NjU2NjdkZDM2ZmU2ZTQ3ZGQ5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QyIFqaIJOAq5220bo_7l3ykD8yvrCaOw3tCLC6TjHdE";

const BASE_URL = "https://api.themoviedb.org/3/";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

axios.defaults.headers.common["Authorization"] = "Bearer ${API_KEY}";

export const fethchTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await axios.get(`${BASE_URL}search/movie`, {
    params: {
      query,
      language: "en-US",
      page: 1,
      include_adult: false,
    },
  });
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}movie/${movieId}`, {
    params: {
      language: "en-US",
    },
  });
  return data;
};

export const fetchMovieCast = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}movie/${movieId}/credits`);
  return data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}movie/${movieId}/reviews`);
  return data.results;
};

export const getMovieImg = (path) =>
  path
    ? `${IMG_BASE_URL}${path}`
    : "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";
