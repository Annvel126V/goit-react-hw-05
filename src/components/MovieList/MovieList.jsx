import { Link } from "react-router-dom";
import { IoHeartSharp } from "react-icons/io5";
import s from "./MovieList.module.css";

function MovieList({ movies }) {
  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li className={s.item} key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <div className={s.info}>
              <img
                className={s.img}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : defaultImg
                }
                alt={movie.title}
                width={150}
              />

              <p className={s.title}>{movie.title}</p>
              <p className={s.date}>{movie.release_date}</p>
              <p className={s.vote}>{movie.vote_average}</p>
              <p className={s.vote_count}>
                {movie.vote_count}
                <IoHeartSharp className={s.icon} />
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
