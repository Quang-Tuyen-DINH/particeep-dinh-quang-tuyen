import React, { Component } from "react";

class Card extends Component {
  render() {
    const { title, category, likes, dislikes } = this.props.movie;
    return (
      <div>
        <h3>{title}</h3>
      </div>
    );
  }
}

export default Card;
