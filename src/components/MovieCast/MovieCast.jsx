import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCastAPI } from "../../service/themoviedbAPI";
import CastList from "../CastList/CastList";
import Heading from "../Heading/Heading";
import Loader from "../Loader/Loader";

const MovieCast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieCast = async () => {
      setLoading(true);
      try {
        const { data } = await getMovieCastAPI(movieId);
        setCastList(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <>
      {castList?.length ? (
        <CastList castList={castList} />
      ) : (
        <Heading
          variant={"error"}
          title={`We don't have any reviews for this movie`}
        />
      )}
      {loading && <Loader />}
      {error && (
        <Heading
          variant={"error"}
          title={`Something went wrong! ${error}. Please try again later`}
        />
      )}
    </>
  );
};

export default MovieCast;
