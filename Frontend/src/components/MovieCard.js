import React from 'react';
import './MovieCard.css'; // Crearemos este archivo ahora

const MovieCard = ({ title, poster }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster}`;

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} className="movie-poster" />
      <h3 className="movie-title">{title}</h3>
    </div>
  );
};

export default MovieCard;