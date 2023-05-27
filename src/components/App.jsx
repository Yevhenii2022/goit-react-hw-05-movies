import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './index';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />

        <Route path="movies" element={<MoviesPage />} />

        {/* <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>  */}

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
