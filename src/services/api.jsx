import axios from 'axios';

const API_KEY = '9c693ee05a01546f454bc52ba3c143b7';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const trendingFilmsAPI = axios.create({
  params: {
    api_key: API_KEY,
  },
});

export async function requestTrendingFilms(page) {
  const {
    data: { results },
  } = await trendingFilmsAPI.get('trending/movie/week', {
    params: { page: page },
  });
  return results;
}


export async function requestFilmDetails(id) {
    const response = await trendingFilmsAPI.get(`movie/${id}`);
    return response;
}