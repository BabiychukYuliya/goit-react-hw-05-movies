import { Route, Routes } from "react-router-dom";
import Movies from '../pages/Movies';
import Home from '../pages/Home';
import { SharedLayout } from "./SharedLayout/SharedLayout";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import NotFound from "./NotFound";

export const App = () => {
  return (
       <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:movieId" element={<MovieDetails />} >
                    <Route path="cast" element={<Cast />} />
                    <Route path="reviews" element={<Reviews />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
  );
};
