import { lazy, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { Layout } from './Layout/Layout';
import { Reviews } from './Reviews/Reviews';

const LazyHomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LazyMoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const LazyMovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

export function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LazyHomePage />} />
          <Route path="/movies" element={<LazyMoviesPage />} />
          <Route path="/movies/:movieId" element={<LazyMovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route
            path="*"
            element={
              <div>
                Sorry, page not found. <Link to="/">Go home</Link>
              </div>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}
