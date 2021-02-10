import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../../components/Card";
import MovieFilter from "../MovieFilter";
import { movies$ } from "../../data";
import { setMovies } from "../../store/actions";

const MovieList = ({ movies, setMovies, isLoading }) => {
  useEffect(() => {
    fetchData();
  });

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
          {
            movies.map((movie) => <Card key={movie.id} movie={movie} />)
          }
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  isLoading: state.isLoading,
  categories: state.movies.map(movie => movie.category),
});

const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch(setMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
