/* // All movies 
import movies from '../src/data.js'; */

// Sample movies
import { sampleMovies } from './data.js';

// Exercise 1: Get the array of all directors.
function getAllDirectors() {
  let result = sampleMovies.map((movie) => movie.year);
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

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(director) {
  let moviesFromDirector = sampleMovies.filter((movie) => movie.director == director);
  let totalScore = moviesFromDirector.reduce((accTotal, movie) => accTotal + movie.score, 0);
  let result = totalScore / moviesFromDirector.length;
  console.log('EXERCICE 3 ->', result);
  return result;
}
moviesAverageOfDirector('Frank Darabont');

// Exercise 4:  Alphabetic order by title
function orderAlphabetically() {
  let result = sampleMovies.reduce(function (allMovies, movie) {
    return [...allMovies, movie.title].sort().slice(0, 10);
  }, []);
  console.log('EXERCICE 4 ->', result);
  return result;
}
orderAlphabetically();

// Exercise 5: Order by year, ascending
function orderByYear() {
  let result = sampleMovies.map((movie) => movie.year).sort();
  console.log('EXERCICE 5 ->', result);
  return result;
}
orderByYear();

// Exercise 5.1 [EXTRA]: Order by year, ascending => all array
function orderByYear2() {
  let result = [
    ...sampleMovies
      .map((movie) => movie)
      .sort((a, b) => {
        // Compara por año
        if (a.year !== b.year) {
          return a.year - b.year;
        } else {
          return a.title.localeCompare(b.title);
        }
      }),
  ];
  console.log('EXERCICE 5 ->', result);
  return result;
}
orderByYear2();
