import React, { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { requestFilmDetails } from '../../services/api';
import { GoBack } from 'components/GoBack/GoBack';
import { StyledDiv, StyledDivRight, StyledIMGMain, StyledP, StyledUl } from './MovieDetails.styled';

export default function MovieDetails() {
  const location = useLocation();
  const { movieId } = useParams();
  const [src, setSrc] = useState('');
  const [title, setTitle] = useState('');
  const [vote, setVote] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchFilmByID(id) {
      try {
        const { poster_path, title, vote_average, overview, genres } =
          await requestFilmDetails(id);

        setSrc('https://image.tmdb.org/t/p/w500/' + poster_path);
        setTitle(title);
        setVote(Math.round((Number(vote_average) * 100) / 10));
        setOverview(overview);

        const genresArray = [];
        genres.map(el => genresArray.push(el.name));
        setGenres(genresArray.join(' '));
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchFilmByID(movieId);
  });

  return (
    <>
      <GoBack />
      {title && (
        <>
          <StyledDiv>
            <StyledIMGMain src={src} alt={title} />
            <StyledDivRight>
              <h1>{title}</h1>
              <p>User Score: {vote}%</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres}</p>
            </StyledDivRight>
          </StyledDiv>
          <StyledP>Additional information</StyledP>
          <StyledUl>
            <li>
              <NavLink state={location.state} to="cast">
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink state={location.state} to="reviews">
                Reviews
              </NavLink>
            </li>
          </StyledUl>
        </>
      )}
      {!title && <p>Sorry! No such movie.</p>}
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
