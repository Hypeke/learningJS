let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?","");

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
}
/*
First lesson
let film = prompt("Один из последних просмотренных фильмов?", "");
let ocenka = prompt('На сколько оцените его?');
let film2 = prompt("Один из последних просмотренных фильмов?", "");
let ocenka2 = prompt('На сколько оцените его?');

personalMovieDB.movies[film] = ocenka;
personalMovieDB.movies[film2] = ocenka2;

console.log(personalMovieDB);*/
let a, b;

for(let i = 0; i < numberOfFilms; i++) {
    a = prompt("Один из последних просмотренных фильмов?", "");
    b = prompt('На сколько оцените его?');
    if(a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        console.log("Вы ввели не правильно! Введите заново!");
        i--;
    }
}

if(numberOfFilms < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (numberOfFilms <= 10 && numberOfFilms > 30) {
    console.log("Вы классический зритель");
} else if (numberOfFilms <= 30) {
    console.log("Вы киноман");
} else {
    console.log("Error");
}

console.log(personalMovieDB);