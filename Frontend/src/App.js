import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Importamos el nuevo Navbar
import MovieCard from './components/MovieCard';

function App() {
  const peliculasPrueba = [
    { id: 1, title: "Batman", poster_path: "/53z2fXEKfnS9uSOPebp36BqyM5b.jpg" },
    { id: 2, title: "Dune", poster_path: "/m9fS86E6pP8UeQYF9K5S9S9S9S9.jpg" },
    { id: 3, title: "Spider-Man", poster_path: "/1g0dhvYrn6v3pS1OInRnYvAR6U.jpg" },
    { id: 4, title: "Interstellar", poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  ];

  return (
    <div className="App">
      <Navbar />

      {/* Sección Hero para llenar el vacío */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Tu próxima película, decidida en grupo.</h1>
          <p>Explora los estrenos de cine y streaming, y vota con tus amigos qué ver hoy.</p>
          <button className="hero-btn">Explorar Cartelera</button>
        </div>
      </div>

      <main>
        <h2 className="section-title">Películas en Tendencia</h2>
        <div className="movie-grid">
          {peliculasPrueba.map(pelicula => (
            <MovieCard 
              key={pelicula.id} 
              title={pelicula.title} 
              poster={pelicula.poster_path} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;