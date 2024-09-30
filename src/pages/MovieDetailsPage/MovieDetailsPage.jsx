import {
  useParams,
  useLocation,
  useNavigate,
  Outlet,
  NavLink,
} from "react-router-dom";
import { Suspense, useEffect, useState, useRef } from "react";
import { fetchMovieDetails, getMovieImgUrl } from "../../servises.api.js";
import Loader from "../../components/Loader/Loader";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const goBackLink = useRef(location.state || "/");

  useEffect(() => {
    const fetchDetalis = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
    };
    fetchDetalis();
  }, [movieId]);

  if (!movie)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <div>
      <button
        className={s.btn}
        onClick={() => {
          navigate(goBackLink.current);
        }}
      >
        Go back
      </button>

      <h1 className={s.title}>{movie.title}</h1>
      <div className={s.container}>
        <img
          className={s.img}
          src={getMovieImgUrl(movie.poster_path)}
          alt={movie.title}
          width={300}
        />
        <div className={s.overview}>
          <h3 className={s.subtitle}>Overview</h3>
          <p className={s.text}>{movie.overview}</p>
          <p className={s.info}>Relise date: {movie.release_date}</p>
          <p className={s.info}>Rating: {movie.vote_average}</p>
        </div>
        <div className={s.genres}>
          <h3 className={s.subtitle}>Genres</h3>
          {movie.genres.map((genre) => (
            <p className={s.textgenre} key={genre.id}>
              {genre.name}
            </p>
          ))}
        </div>
        <div className={s.links}>
          <NavLink className={s.link} to="cast">
            Cast
          </NavLink>
          <NavLink className={s.link} to="reviews">
            Reviews
          </NavLink>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
