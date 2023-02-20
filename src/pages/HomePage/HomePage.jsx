import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    <section>
      <h1>Trending today</h1>
      <ul>
        {trendingFilms.map(el => (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
