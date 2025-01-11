import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import css from './App.module.css';
import { lazy, Suspense } from 'react';


const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const Navigation = lazy(() => import('./Navigation/Navigation'));

const App = () => {
  return (
    <div className={css.container}>
      <Header />

      <Suspense fallback={<h2>Page is loading...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />

          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="reviews" element={<MovieReviews />} />
            <Route path="cast" element={<MovieCast />} />
          </Route>

          <Route path="*" element={<Navigation />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
