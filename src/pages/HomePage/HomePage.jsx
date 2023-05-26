import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/moviesAPI';
import { PageHeading, MoviesGallery } from '../../components/index';
import { TextWrapper, NoMovieText } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(response => setMovies(response.data.results));
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />
      {movies && <MoviesGallery moviesSet={movies} />}
      {movies && movies.length === 0 && (
        <TextWrapper>
          <NoMovieText>
            All filmmakers are on holiday. <br /> There are no trending movies
            for now.
          </NoMovieText>
        </TextWrapper>
      )}
    </>
  );
};

export default HomePage;
