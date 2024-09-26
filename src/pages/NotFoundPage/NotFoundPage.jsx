import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Sorry but this page is not found</h1>
      <Link to="/">Home page</Link>
    </div>
  );
};

export default NotFoundPage;
