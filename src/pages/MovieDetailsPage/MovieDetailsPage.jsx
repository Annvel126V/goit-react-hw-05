import {
  useParams,
  useLocation,
  useNavigate,
  Outlet,
  Link,
} from "react-router-dom";
import { Suspense, useEffect, useState, useRef } from "react";
import { fetchMovieDetails, getMovieImgUrl } from "../../servises.api.js";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const backLink = useRef(location.state?.from ?? "/movies");

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
        onClick={() => {
          navigate(backLink.current);
        }}
      >
        Back
      </button>

      <h1>{movie.title}</h1>
      <img
        src={getMovieImgUrl(movie.poster_path)}
        alt={movie.title}
        width={300}
      />
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <p>Relise date: {movie.release_date}</p>
      <h3>Genres</h3>
      {movie.genres.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
      <Link to="/cast">Cast</Link>
      <Link to="/reviews">Reviews</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
