import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast, getMovieImgUrl } from "../../servises.api.js";
const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    const fetchCast = async () => {
      const data = await fetchMovieCast(movieId);
      setCast(data);
    };
    fetchCast();
  }, [movieId]);

  return (
    <ul>
      {cast.map((actor) => (
        <li key={cast.id}>
          <img
            src={getMovieImgUrl(actor.profile_path)}
            alt={actor.name}
            width={150}
          />
          <p>{cast.name}</p>
          <p>Character: {cast.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
