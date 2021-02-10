import * as types from './constants';

export const setMovies = movies => {
  return ({
    type: types.SET_MOVIE,
    payload: movies,
  });
}

export const setCategories = categories => {
  return ({
    type: types.SET_CATEGORIES,
    payload: categories,
  });
}