// src/components/Movies.jsx
export function ListOfMovies({ movies }) {
  return (
    <ul className="grid grid-cols-4 gap-5">
      {movies.map((movie) => (
        <li key={movie.id} className="">
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img className='h-72 w-3/4 object-cover' src={movie.poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
}

export function NoMoviesResults() {
  return <p>No se encontraron peliculas para esta busqueda</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}
