import css from "./MovieInfo.module.css";

const MovieInfo = ({ movie }) => {
  return (
    <div className={css.wrapper}>
      <img
        className={css.image}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className={css.information}>
        <h2 className={css.title}>
          {movie.title} ({movie.release_date.split("-")[0]})
        </h2>
        <p className={css.text}>
          User Score: {Math.round(movie.vote_average * 10)}%
        </p>
        <h3 className={css.subtitle}>Overview</h3>
        <p className={css.text}>{movie.overview}</p>
        <h3 className={css.subtitle}>Genres</h3>
        <div className={css.genres}>
          {movie.genres.map((genre) => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
