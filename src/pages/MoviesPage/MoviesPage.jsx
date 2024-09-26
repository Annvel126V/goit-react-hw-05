import { Link } from "react-router-dom";
const MoviesPage = () => {
  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };
  return (
    <div>
      <Link to="./HomePage">Home page</Link>
      <Link to="./MoviesPage">Movvies page</Link>
      <Link to="./"></Link>
      <Link to="./"></Link>
    </div>
  );
};

export default MoviesPage;
