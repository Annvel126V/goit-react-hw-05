import { useParams, useLocation, useNavigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails, getMovieImgUrl } from "../../servises.api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(location.state?.from || "/movies");
  };

  useEffect(() => {
    const fetchDetalis = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
    };
    fetchDetalis();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <h1>{movie.title}</h1>
      <img src={getMovieImgUrl(movie.poster_path)} alt={movie.title} />
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
