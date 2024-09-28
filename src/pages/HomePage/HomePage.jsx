import { useEffect, useState } from "react";
import { fethchTrendingMovies } from "../../servises.api.js";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fethchTrendingMovies();
      setMovies(data);
    };
    getMovies();
  }, []);
  return <MovieList movies={movies} />;
};

export default HomePage;
