import React, { useEffect, useState } from 'react';
import { requestTrendingFilms } from '../../services/api';

const PAGE = 1;

export function HomePage() {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    async function fetchTrendingFilms(page) {
      try {
        const films = await requestTrendingFilms(page);
        setTrendingFilms(films);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchTrendingFilms(PAGE);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingFilms.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </>
  );
}
