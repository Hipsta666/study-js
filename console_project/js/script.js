const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
  b = prompt('На сколько оцение его?', ''),
  c = prompt('Один из последних просмотренных фильмов?', ''),
  b = prompt('На сколько оцение его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
