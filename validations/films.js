// All movies
import movies from '../validations/data.js';

/* // Sample movies
import { movies } from './data.js';
 */
// Exercise 0: Get the array of all Movies.
function getAllMovies() {
  let result = movies.map((movie) => movie);
  console.log('EXERCICE 0 ->', result);
  return result;
}
getAllMovies();

// Exercise 1: Get the array of all directors.
function getAllDirectors() {
  let result = movies.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}
getAllDirectors();

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(director) {
  let result = movies.filter((movie) => movie.director == director);
  console.log('EXERCICE 2 ->', result);
  return result;
}
getMoviesFromDirector('Francis Ford Coppola');

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(director) {
  let moviesFromDirector = movies.filter((movie) => movie.director == director);
  if (moviesFromDirector.length === 0) {
    // Return NaN if there are no movies from the director
    return NaN;
  }
  let totalScore = moviesFromDirector.reduce((accTotal, movie) => accTotal + movie.score, 0);
  let averageScore = totalScore / moviesFromDirector.length;
  let result = averageScore.toFixed(2);
  console.log('EXERCICE 3 ->', result);
  return result;
}
moviesAverageOfDirector('Frank Darabont');

// Exercise 4: Alphabetic order by title
function orderAlphabetically() {
  let result = movies
    .map((movie) => movie.title)
    .sort()
    .slice(0, 15);

  console.log('EXERCISE 4 ->', result);
  return result;
}
orderAlphabetically();

/* EXPLICACIÖN

.map((movie) => movie.title):
Crea un nuevo array que contiene solo los títulos de las películas. El método map itera sobre cada objeto de la matriz movies y extrae el valor de la propiedad title, devolviendo un nuevo array con estos títulos.

.sort(): 
Ordena alfabéticamente el array de títulos. La función sort ordena los elementos de un array en su lugar y devuelve el array ordenado. En este caso, los títulos se ordenan alfabéticamente en orden ascendente.

.slice(0, 15):
Toma los primeros 15 elementos del array ordenado. Si hay menos de 20 elementos, toma todos los elementos. Esto se hace para cumplir con el requisito de devolver los primeros 20 títulos después de ordenar alfabéticamente.

console.log('EXERCISE 4 ->', result): Imprime el resultado en la consola con una etiqueta 'EXERCISE 4 ->' para propósitos de depuración.

return result: Devuelve el array resultante después de estas operaciones.
*/

// Exercise 5: Order by year, ascending
function orderByYear() {
  let result = movies.map((movie) => movie.year).sort();
  console.log('EXERCICE 5 ->', result);
  return result;
}
orderByYear();

// Exercise 5.1 [EXTRA]: Order by year, ascending => all array
function orderByYearAllMovies() {
  let result = [
    ...movies
      .map((movie) => movie)
      .sort((a, b) => {
        // Compara por año
        if (a.year !== b.year) {
          return a.year - b.year;
        } else {
          // Ordena por título
          return a.title.localeCompare(b.title);
        }
      }),
  ];
  console.log('EXERCICE 5.1 ->', result);
  return result;
}
orderByYearAllMovies();

// Exercise 6.1: Get the films of a certain category
function moviesByCategory(genre) {
  let filteredMoviesByCategory = movies.filter((movie) => movie.genre.includes(genre));
  let result = filteredMoviesByCategory;
  console.log('EXERCISE 6.1 ->', result);
  return result;
}
moviesByCategory('Crime');

// Exercice 6: Calculate the average of the movies in a category
function moviesAverageByCategory(genre) {
  let filteredMoviesByCategory = movies.filter((movie) => movie.genre.includes(genre));
  let totalScore = filteredMoviesByCategory.reduce((accTotal, movie) => accTotal + movie.score, 0);
  let averageScore = totalScore / filteredMoviesByCategory.length;
  let result = averageScore.toFixed(2);
  console.log('EXERCICE 6.2 ->', result);
  return result;
}
moviesAverageByCategory('Crime');

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {
  // Utilize map to create a new array without modifying the original
  let result = movies.map((movie) => {
    // Create a copy of the movie object to avoid modifying the original
    const newMovie = { ...movie };

    // Extract hours and minutes from the duration property using a regular expression
    const match = newMovie.duration.match(/(\d+)\s*h(?:\s*(\d+)\s*min)?/);

    if (match) {
      // Convert hours and minutes to integer values
      const hours = parseInt(match[1], 10) || 0;
      const minutes = parseInt(match[2], 10) || 0;

      // Calculate total minutes considering durations exceeding 60 minutes
      const totalMinutes = hours * 60 + minutes;
      if (minutes > 60) {
        const extraHours = Math.floor(minutes / 60);
        totalMinutes += extraHours;
      }

      // Update the "duration" property in the movie copy
      newMovie.duration = totalMinutes;

      return newMovie;
    } else {
      // Handle invalid or incorrect format
      console.error(`Invalid time format for movie "${newMovie.title}"`);
      return newMovie;
    }
  });

  console.log('EXERCISE 7 ->', result);
  return result;
}
hoursToMinutes();

// Exercise 8: Get the best film of a year
function bestFilmOfYear(year) {
  let moviesByYear = movies.filter((movie) => movie.year == year);

  // Check if there are no movies for the given year
  if (moviesByYear.length === 0) {
    console.error(`No movies found for the year ${year}`);
    return null;
  }

  // Ordenar películas por puntuación de forma descendente
  let scoreSortedMoviesbyYear = moviesByYear.sort((a, b) => b.score - a.score);

  // Tomar la primera película (la de mayor puntuación)
  let result = scoreSortedMoviesbyYear[0];

  console.log('EXERCISE 8 ->', result);
  return result; // Devolver el objeto de película directamente
}
bestFilmOfYear(1994);
