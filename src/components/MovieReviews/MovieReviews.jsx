import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviewAPI } from "../../service/themoviedbAPI";
import ReviewList from "../ReviewList/ReviewList";
import Heading from "../Heading/Heading";
import Loader from "../Loader/Loader";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviewList, setReviewList] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieCast = async () => {
      setLoading(true);
      try {
        const { data } = await getMovieReviewAPI(movieId);
        setReviewList(data.results);
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
      {reviewList?.length ? (
        <ReviewList reviewList={reviewList} />
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

export default MovieReviews;
