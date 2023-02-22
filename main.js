const searchBtn = document.getElementById("search-btn")
const searchInput = document.getElementById("search-input")
const movieFeed = document.getElementById('movie-feed')

searchBtn.addEventListener("click", async function () {
    let res = await fetch(`http://www.omdbapi.com/?apikey=84d8cf6b&s=${searchInput.value}`)
    let data = await res.json()
    getMovieList(data.Search)
})

async function getMovieList(data) {
   let movieList = []
    for(let i = 0; i < data.length; i++){
        let res = await fetch(`http://www.omdbapi.com/?apikey=84d8cf6b&i=${data[i].imdbID}`)
        let movieDetails = await res.json()
        movieList.push(movieDetails)
    }
    renderMovies(movieList)
}

function renderMovies(movieList){
    let movieHtml = ''
    movieList.forEach(function (movieData, index) {
        movieHtml += `
            <div class="movie">
                <img class="movie-poster" src="${movieData.Poster}" alt="Poster for ${movieData.Title}">
                <div class="movie-info">
                    <h3>${movieData.Title}</h3>
                    <div class="movie-details">
                        <p class="info-el">${movieData.Runtime}</p>
                        <p class="info-el">${movieData.Genre}</p>
                        <div class="add-watchlist-btn" data-add='index'>
                            <img src="images/plus.svg" alt="add to watchlist button">
                            <p> Watchlist</p>
                        </div>
                    </div>
                    <p class="movie-description info-el">${movieData.Plot}</p>
                </div>
            </div>`
    });
    movieFeed.innerHTML = movieHtml
    movieFeed.style.backgroundImage = "none"
}