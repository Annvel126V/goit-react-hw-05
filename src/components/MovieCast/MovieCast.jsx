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
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((cast) => (
          <li key={cast.id}>
            <img
              src={getMovieImgUrl(cast.profile_path)}
              alt={cast.name}
              width={150}
            />
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
