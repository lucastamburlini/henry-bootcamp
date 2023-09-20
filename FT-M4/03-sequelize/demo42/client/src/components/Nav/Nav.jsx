import {Link} from "react-router-dom";
import style from "./nav.module.css";

function Nav() {
  return (
    <div className={style.container}>
      <Link to="/about">
        <button>About</button>
      </Link>
    </div>
  );
}

export default Nav;
