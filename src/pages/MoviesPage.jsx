import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByQueryAPI } from "../service/themoviedbAPI";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import SearchForm from "../components/SearchForm/SearchForm";
import MoviesList from "../components/MoviesList/MoviesList";
import Loader from "../components/Loader/Loader";
import Heading from "../components/Heading/Heading";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) return;

    const getMoviesByQuery = async () => {
      setLoading(true);
      try {
        const { data } = await getMoviesByQueryAPI(query);
        if (data.total_results === 0) {
          setIsEmpty(true);
          return;
        }
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getMoviesByQuery();
  }, [query]);

  const handleSubmit = (query) => {
    setQuery(query);
    setError(null);
    setIsEmpty(false);
    setSearchParams({ query });
  };

  return (
    <>
      <Section>
        <Container>
          <SearchForm onSubmit={handleSubmit} />
          {isEmpty && <Heading variant={"info"} title={"Sorry! Not found"} />}
          <MoviesList movies={movies} />
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

export default Movies;
