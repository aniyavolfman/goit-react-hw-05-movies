import axios from 'axios';

const API_KEY = '9c693ee05a01546f454bc52ba3c143b7';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const filmsAPI = axios.create({
  params: {
    api_key: API_KEY,
  },
});

export async function requestTrendingFilms(page) {
  const {
    data: { results },
  } = await filmsAPI.get('trending/movie/week', {
    params: { page: page },
  });
  return results;
}


export async function requestFilmDetails(id) {
    const {data} = await filmsAPI.get(`movie/${id}`);
    return data;
}

export async function requestFilmCast(id) {
  const {data:{cast}} = await filmsAPI.get(`movie/${id}/credits`);
  return cast;
}

export async function requestFilmReviews(id) {
  const {
    data: { results },
  } = await filmsAPI.get(`movie/${id}/reviews`);
  return results;
}

export async function requestPostsByQuery(query) {
  const { data: {results} } = await filmsAPI.get(`/search/movie`, {
    params: { query: query },
  });
  return results;
}