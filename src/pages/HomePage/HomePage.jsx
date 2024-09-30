import { useEffect, useState } from "react";
import { fethchTrendingMovies } from "../../servises.api.js";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fethchTrendingMovies();
      setMovies(data);
    };
    getMovies();
  }, []);
  return (
    <div>
      <h1 className={s.title}>Trending today</h1>
      <div className={s.container}>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default HomePage;
