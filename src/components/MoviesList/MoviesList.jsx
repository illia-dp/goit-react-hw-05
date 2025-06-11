import { Link, useLocation } from "react-router-dom";
import css from "./MoviesList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li className={css.item} key={movie.id}>
          <Link
            className={css.link}
            state={location}
            to={`/movies/${movie.id}`}
          >
            <p className={css.text}>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
