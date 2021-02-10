import * as types from "./constants";

const initialState = {
  isLoading: true,
  movies: [],
  currentPage: 1,
  categories: [],
  selectedCategories: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MOVIE:
      console.log(action.payload.map((movie) => movie.category));
      return {
        ...state,
        isLoading: false,
        movies: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
