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

export const setSelectedCategory = category => ({
  type: types.SET_SELECTED_CATEGORY,
  payload: category,
})

export const deleteAMovie = id => ({
  type: types.DELETE_A_MOVIE,
  payload: id,
})

export const likeAMovie = id => ({
  type: types.LIKE_A_MOVIE,
  payload: id,
})

export const dislikeAMovie = id => ({
  type: types.DISLIKE_A_MOVIE,
  payload: id,
})