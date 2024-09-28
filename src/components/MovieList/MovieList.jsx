import { Link } from "react-router-dom";

function MovieList({ movies }) {
  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.title}
              width={150}
            />
            <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
