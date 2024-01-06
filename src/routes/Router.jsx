import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { Suspense, lazy } from "react";
import Loading from "../pages/Loading";
import Register from "../pages/Register";
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const HomePage = lazy(() => import("../pages/HomePage"));
const WatchList = lazy(() => import("../pages/WatchList"));

export default function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
        <Route path="/watch-list" element={<WatchList />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
