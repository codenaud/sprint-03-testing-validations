/* // All movies 
import movies from '../src/data.js'; */

// Sample movies
import { sampleMovies } from './data.js';

// Exercise 1: Get the array of all directors.
function getAllDirectors() {
  let result = sampleMovies.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}
getAllDirectors();

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(director) {
  let result = sampleMovies.filter((movie) => movie.director == director);
  console.log('EXERCICE 2 ->', result);
  return result;
}
getMoviesFromDirector('Francis Ford Coppola');
