import React from 'react'
import Card from "../Card/Card"
import { movies$ } from "../../data"

function MovieList() {
  let mvArray;
  setTimeout(() => {
    movies$.then(data => {
      mvArray = data.slice()
    })
  }, 100);
  console.log(mvArray)
  return (
    <div>
      <h1>This is MovieList</h1>

      <Card />
    </div>
  )
}

export default MovieList
