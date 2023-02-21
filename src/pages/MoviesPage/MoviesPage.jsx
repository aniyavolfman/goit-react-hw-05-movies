import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm'
import { requestPostsByQuery } from 'services/api';
import { StyledUl } from './MoviesPage.styled';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();
  const [queryFilms, setQueryFilms] = useState([]);

  useEffect(() => {
    if (searchQuery === '') return;

    async function fetchPostsByQuery(query) {
      try {
        const film = await requestPostsByQuery(query);
        setQueryFilms(film);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchPostsByQuery(searchQuery);
  }, [searchQuery]);

  function onSubmit(searchValue) {
    setSearchParams({ query: searchValue });
  }

  return (
    <section>
      <SearchForm onSubmit={onSubmit} searchQuery={searchQuery} />
      <StyledUl>
        {queryFilms.map(el => (
          <li key={el.id}>
            <Link state={{ from: location ?? '/' }} to={`/movies/${el.id}`}>
              {el.title}
            </Link>
          </li>
        ))}
      </StyledUl>
    </section>
  );
}
