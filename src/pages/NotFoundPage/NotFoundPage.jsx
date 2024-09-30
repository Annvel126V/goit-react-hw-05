import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <h1 className={s.title}>Sorry but this page is not found</h1>
      <Link to="/">Home page</Link>
    </div>
  );
};

export default NotFoundPage;
