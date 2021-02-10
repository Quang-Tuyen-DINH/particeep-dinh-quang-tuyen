import * as types from "./actionTypes";

export default function movieReducer(state = [], action) {
  switch (action.type) {
    case types.DELETEMOVIE:
      return [...state, { ...action.product }];
    default:
      return state;
  }
}