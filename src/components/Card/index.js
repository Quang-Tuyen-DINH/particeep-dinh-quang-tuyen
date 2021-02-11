import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteAMovie, likeAMovie, dislikeAMovie } from "../../store/actions";
import "./index.css";

class Card extends Component {
  render() {
    const { id, title, category, likes, dislikes } = this.props.movie;
    return (
      <div>
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <h1>{title}</h1>
              <h4>{category}</h4>
            </div>
            <div className="movie_desc">
              <button id="likeButton" onClick={() => this.props.likeAMovie(id)}>
                {likes}
              </button>
              <button
                id="dislikeButton"
                onClick={() => this.props.dislikeAMovie(id)}
              >
                {dislikes}
              </button>
              <div id="all">
                <div id="bar">
                  <div id="likes"></div>
                  <div id="dislikes"></div>
                </div>
              </div>
              <ul>
                <li>
                  <button
                    id="deleteButton"
                    onClick={() => this.props.deleteAMovie(id)}
                  >
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteAMovie: (id) => dispatch(deleteAMovie(id)),
  likeAMovie: (id) => dispatch(likeAMovie(id)),
  dislikeAMovie: (id) => dispatch(dislikeAMovie(id))
});

export default connect(null, mapDispatchToProps)(Card);
