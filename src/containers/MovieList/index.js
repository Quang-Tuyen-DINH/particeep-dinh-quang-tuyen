import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../../components/Card";
import MovieFilter from "../MovieFilter/";
import { movies$ } from "../../data";
import { setMovies } from "../../store/actions";
import "./index.css";

const MovieList = ({ movies, setMovies, isLoading, selectedCategory }) => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await movies$.then((data) => {
      setMovies(data);
    });
  };

  return (
    <div>
      {isLoading ? (
        <p>L O A D I N G ...</p>
      ) : (
        <>
          <MovieFilter />
          <p id="filterIndicator">{`${movies.length} results.`}</p>
          <div className="movieContainer">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: filterMovieByCategory(state.movies, state.selectedCategory),
  selectedCategory: state.selectedCategory,
  isLoading: state.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch(setMovies(movies))
});

const filterMovieByCategory = (movies, selectedCategory) => {
  if (selectedCategory) {
    return movies.filter((movie) => movie.category === selectedCategory);
  }
  return movies;
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
