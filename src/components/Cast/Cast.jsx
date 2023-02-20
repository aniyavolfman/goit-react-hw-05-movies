import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { requestFilmCast } from 'services/api';

export function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchFilmCast(id) {
      try {
        const cast = await requestFilmCast(id);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchFilmCast(movieId);
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ character, name, profile_path }) => {
        const src = profile_path
          ? 'https://image.tmdb.org/t/p/w500/' + profile_path
          : '';
        return (
          <li key={nanoid()}>
            <img src={src} alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}
