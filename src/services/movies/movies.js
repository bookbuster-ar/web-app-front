// src/services/movies/movies.js
const API_KEY = "b85fa225";

export const searchMovies = async ({ search }) => {
  if (search === "") return [];

  try {
    const response = await fetch(
      `https://omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const json = await response.json();

    const movies = json.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (error) {
    throw new Error('Error searching movies')
  }
};
