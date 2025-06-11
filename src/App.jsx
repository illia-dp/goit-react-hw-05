import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const Movies = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
