import { movieCard } from "./movies.js";
import { movies } from "./getMovies.js";

// to decide where movieCards should be appended
const figureCard = document.querySelector("figure.movies");

//example array how to load data (will be changed to data from json-file)
const array = [
  {

    trailer: "https://www.youtube.com/embed/dtKMEAXyPkg",
    "id": 1,
    "comingSoon": false,
    "title": "Avatar",
    "releaseYear": 2009,
    "description": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "image": "https://placecats.com/640/480",
    "rating": 7.9,
    "genre": "Action, Adventure, Fantasy",
    "runtime": "162 min",
    "rated": "PG-13",
    "director": "James Cameron",
    "actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "language": "English, Spanish"
  },
  {
    "id": 2,
    "comingSoon": false,
    "title": "I Am Legend",
    "releaseYear": 2007,
    "description": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
    "trailer": "https://www.youtube.com/embed/dtKMEAXyPkg",
    "image": "https://placecats.com/640/480",
    "rating": 7.2,
    "genre": "Drama, Horror, Sci-Fi",
    "runtime": "101 min",
    "rated": "PG-13",
    "director": "Francis Lawrence",
    "actors": "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
    "language": "English"
},
{
    "id": 3,
    "comingSoon": false,
    "title": "300",
    "releaseYear": 2006,
    "description": "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
    "trailer": "https://www.youtube.com/embed/UrIbxk7idYA",
    "image": "https://placecats.com/640/480",
    "rating": 7.7,
    "genre": "Action, Drama, Fantasy",
    "runtime": "117 min",
    "rated": "R",
    "director": "Zack Snyder",
    "actors": "Gerard Butler, Lena Headey, Dominic West, David Wenham",
    "language": "English"
}
];

// create cards from all the elements in an array.
movieCard.createMovieCardsFromArray(array, figureCard);
// opens movie modal box from movie card.
movieCard.clickEventMovieModal(array);

// reads json file to diffrent arrays in movie objects.
movies.getAllMovies();
movies.getReleasedMovies();
movies.getUpcomingMovies();

// makes the arrays from the object global
let allMovies = movies.allMovies;
console.log(allMovies);
let released = movies.released;
let upcoming = movies.upcoming;
console.log(released);
console.log(upcoming);
