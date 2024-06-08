let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?","");

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
}

let film = prompt("Один из последних просмотренных фильмов?", "");
let ocenka = prompt('На сколько оцените его?');
let film2 = prompt("Один из последних просмотренных фильмов?", "");
let ocenka2 = prompt('На сколько оцените его?');

personalMovieDB.movies[film] = ocenka;
personalMovieDB.movies[film2] = ocenka2;

console.log(personalMovieDB);