import * as types from "./constants";

const initialState = {
  isLoading: true,
  movies: [],
  currentPage: 1,
  categories: [],
  selectedCategory: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MOVIE:
      return {
        ...state,
        isLoading: false,
        movies: action.payload
      };
    case types.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      };
    case types.DELETE_A_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload)
      };
    case types.LIKE_A_MOVIE:
      console.log(action.payload);
      return { 
        ...state,
        // Update like property
    }
    case types.DISLIKE_A_MOVIE:
        console.log(action.payload);
        return { 
          ...state,
          // Update dislike property
       }
    default:
      return state;
  }
};

export default reducer;
