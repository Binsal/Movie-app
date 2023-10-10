const parentElement = document.querySelector(".main")
const searchInput = document.querySelector(".input");


let searchValue="";
let filteredArrOfMovies = [];

const URL = "https://movies-app.prakashsakari.repl.co/api/movies";

const getMovies = async (url)=>{

    try{
        const {data}= await axios.get(url);
        return data;
    }
    catch(err){

    }

};

let movies= await getMovies(URL);
console.log(movies);


const createElement = (element) => document.createElement(element);


const createMovieCard = (movies) =>{

    for (let movie of movies){
        // creating parent container
    const cardContainer = createElement("div");
    cardContainer.classList.add("card", "shadow");

    // creating image container
    const imageContainer = createElement("div");
    imageContainer.classList.add("card-image-container");

    // creating card image
    const imageEle = createElement("img");
    imageEle.classList.add("card-image");
    imageEle.setAttribute("src", movie.img_link);
    imageEle.setAttribute("alt", movie.name);
    imageContainer.appendChild(imageEle);

    cardContainer.appendChild(imageContainer);

    // creating card details container

    const cardDetails = createElement("div");
    cardDetails.classList.add("movie-details");

    // card title

    const titleEle = createElement("p");
    titleEle.classList.add("title");
    titleEle.innerText = movie.name;
    cardDetails.appendChild(titleEle);

    // card genre

    const genreEle = createElement("p");
    genreEle.classList.add("genre");
    genreEle.innerText = `Genre: ${movie.genre}`;
    cardDetails.appendChild(genreEle);

    // ratings and length container
    const movieRating = createElement("div");
    movieRating.classList.add("ratings");

    // star/rating component

    const ratings = createElement("div");
    ratings.classList.add("star-rating");

    // star icon
    const starIcon = createElement("span");
    starIcon.classList.add("material-icons-outlined");
    starIcon.innerText = "star";
    ratings.appendChild(starIcon);

    // ratings
    const ratingValue = createElement("span");
    ratingValue.innerText = movie.imdb_rating;
    ratings.appendChild(ratingValue);

    movieRating.appendChild(ratings);

    // length
    const length = createElement("p");
    length.innerText = `${movie.duration} mins`;

    movieRating.appendChild(length);
    cardDetails.appendChild(movieRating);
    cardContainer.appendChild(cardDetails);

    parentElement.appendChild(cardContainer);
  }
};

function handleSearch (event) {

    searchValue=event.target.value.toLowerCase();

    filteredArrOfMovies =
    searchValue?.length > 0
      ? movies.filter(
          (movie) =>
            searchValue === movie.name.toLowerCase() ||
            searchValue === movie.director_name.toLowerCase() ||
            movie.writter_name.toLowerCase().split(",").includes(searchValue) ||
            movie.cast_name.toLowerCase().split(",").includes(searchValue)
        )
      : movies;

    console.log(filteredArrOfMovies);

}

searchInput.addEventListener("keyup",handleSearch);

createMovieCard(movies);





