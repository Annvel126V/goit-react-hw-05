import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast, getMovieImgUrl } from "../../servises.api.js";
import s from "./MovieCast.module.css";
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
      <h2 className={s.title}>Cast</h2>
      <div className={s.container}>
        <ul className={s.list}>
          {cast.map((actor) => (
            <li className={s.item} key={actor.id}>
              <img
                className={s.img}
                src={getMovieImgUrl(actor.profile_path)}
                alt={actor.name}
                width={100}
              />
              <div>
                <p className={s.name}>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieCast;
