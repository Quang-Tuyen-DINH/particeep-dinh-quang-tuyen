import * as types from "./actionTypes";

export function deleteMovie(movie) {
  return { type: types.DELETEMOVIE, movie };
}

export function likeMovie(movie) {
  return { type: types.LIKEMOVIE, movie };
}

export function dislikeMovie(movie) {
  return { type: types.DISLIKEMOVIE, movie };
}