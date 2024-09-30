import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";
import { PiMaskSadDuotone } from "react-icons/pi";

const NotFoundPage = () => {
  return (
    <div>
      <h1 className={s.title}>
        Sorry but this page is not found <PiMaskSadDuotone className={s.icon} />
      </h1>
      <Link className={s.link} to="/">
        Home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
