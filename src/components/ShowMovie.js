import React from 'react';

const ShowMovie = ({ movieInfo }) => {
  function addDefault(e) {
    e.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
  }

  let {
    Title, 
    Year, 
    Rated, 
    Released, 
    Runtime, 
    Genre,
    Poster, 
    Director,
    Writer,
    Actors,
    Plot,
    Awards,
    imdbRating,
    BoxOffice,
    Production
  } = movieInfo;
  return (
    <div className="container">
      <div className="grid">
        <div className="grid__image">
          <img src={Poster} alt={Title} onError={addDefault} />
        </div>
        <div className="grid__content">
          <h3>{Title} ({Year})</h3>
          <p><b>Released:</b> {Released}</p>
          <p><b>Runtime:</b> {Runtime}</p>
          <p><b>Rated:</b> {Rated}</p>
          <p><b>Genre:</b> {Genre}</p>
        </div>
      </div>
    </div>
  );
}

export default ShowMovie;