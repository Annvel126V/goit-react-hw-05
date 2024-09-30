import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchMovies } from "../../servises.api.js";
import MovieList from "../../components/MovieList/MovieList";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";
import Loader from "../../components/Loader/Loader";
import s from "./MoviesPage.module.css";
const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("query") || "";
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const results = await searchMovies(query);
        if (results.length === 0) {
          setError("No movies found");
          setMovies([]);
        } else {
          setMovies(results);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.query.value;
    setSearchParams({ query });
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search movie"
        />

        <button className={s.btn} type="submit">
          Search
        </button>
      </form>
      {isLoading && <Loader />}
      {error && <NotFoundPage error={error} />}
      {!isLoading && !error && movies.length > 0 && (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default MoviesPage;
