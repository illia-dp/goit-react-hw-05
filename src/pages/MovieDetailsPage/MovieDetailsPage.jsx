import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetailsAPI } from "../../service/themoviedbAPI";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import Loader from "../../components/Loader/Loader";
import Heading from "../../components/Heading/Heading";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const goBackLink = useRef(location.state || "/movies");

  useEffect(() => {
    const getMovieDetails = async () => {
      setLoading(true);
      try {
        const { data } = await getMovieDetailsAPI(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);
  return (
    <Section>
      <Container>
        <Link to={goBackLink.current} className={css.link}>
          Go Back
        </Link>
        {movie && <MovieInfo movie={movie} />}
        {loading && <Loader />}
        {error && (
          <Heading
            variant={"error"}
            title={`Something went wrong! ${error}. Please try again later`}
          />
        )}
        <div className={css.info}>
          <h2 className={css.infoTitle}>Additional information</h2>
          <div className={css.linksList}>
            <Link className={css.link} to={"cast"}>
              Cast
            </Link>
            <Link className={css.link} to={"reviews"}>
              Reviews
            </Link>
          </div>
        </div>
        <Outlet />
      </Container>
    </Section>
  );
};

export default MovieDetailsPage;
