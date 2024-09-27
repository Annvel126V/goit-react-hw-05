import { Routes, Route, NavLink } from "react-router-dom";
import s from "./App.css";
import clsx from "clsx";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

function App() {
  return (
    <div className={s.wrapper}>
      <nav>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies">
          Movies
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies/:movieId">
          MovieDetails
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies/:movieId/cast">
          Cast
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies/:movieId/reviews">
          Reviews
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
