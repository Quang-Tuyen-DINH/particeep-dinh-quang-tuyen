import React, { Component } from "react";
import { connect } from "react-redux";
import { setSelectedCategory } from "../../store/actions";
import "./index.css";

class MovieFilter extends Component {
  handleChange = (event) => {
    this.props.filterByCategory(event.target.value);
  };

  render() {
    let categories = this.props.categories;
    const removeDuplicates = (array) => {
      let newArray = new Array();
      for (let a = array.length - 1; a >= 0; a--) {
        for (let b = array.length - 1; b >= 0; b--) {
          if (array[a] === array[b] && a !== b) {
            delete array[b];
          }
        }
        if (array[a] !== undefined) newArray.push(array[a]);
      }
      return newArray;
    };
    const sortedCategories = removeDuplicates(categories);

    return (
      <div id="filterList">
        <select onChange={this.handleChange} defaultValue="">
          <option value="">Select category:</option>
          {sortedCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.movies.map((movie) => movie.category)
});

const mapDispatchToProps = (dispatch) => ({
  filterByCategory: (category) => dispatch(setSelectedCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieFilter);
