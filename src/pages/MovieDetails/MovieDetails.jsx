import { Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDetails } from 'api';
import { BackLink } from 'components/BackLink';
import { Img, Description, Details, Info } from './MovieDetails.styled';
import PropTypes from 'prop-types';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <Details>
        <Img
          src={`https://www.themoviedb.org/t/p/w500/${movie.poster_path}`}
          alt={`${movie.title}`}
        />

        <Description>
          <h2>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p>User score: {Math.floor(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name).join(' / ')}</p>
        </Description>
      </Details>


      <Info>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </Info>
    </>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  location: PropTypes.string,
  backLinkHref: PropTypes.string,
}