import { useEffect, useState } from "react";
import { getTrendingMoviesAPI } from "../service/themoviedbAPI";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import MoviesList from "../components/MoviesList/MoviesList";
import Loader from "../components/Loader/Loader";
import Heading from "../components/Heading/Heading";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getTrendingMovies = async () => {
      try {
        const { data } = await getTrendingMoviesAPI();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      <Section>
        <Container>
          {movies && <MoviesList movies={movies} />}
          {loading && <Loader />}
          {error && (
            <Heading
              variant={"error"}
              title={`Something went wrong! ${error}. Please try again later`}
            />
          )}
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
