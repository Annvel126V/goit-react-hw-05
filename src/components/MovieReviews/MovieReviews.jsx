import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../servises.api.js";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      const data = await fetchMovieReviews(movieId);
      setReviews(data);
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      <h2 className={s.title}>Reviews</h2>
      <ul className={s.list}>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li className={s.item} key={review.id}>
              <h3 className={s.author}>{review.author}</h3>
              <p className={s.content}>{review.content}</p>
            </li>
          ))
        ) : (
          <p>Dont have reviews for this movie</p>
        )}
      </ul>
    </>
  );
};

export default MovieReviews;
