import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast, getMovieImgUrl } from "../../servises.api.js";
const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const data = await fetchMovieCast(movieId);
      setCast(data);
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={getMovieImgUrl(actor.profile_path)}
              alt={actor.name}
              width={100}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
