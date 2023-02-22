const movieFeed = document.getElementById('movie-feed')
let movieWatchlist = []

if(localStorage.getItem('watchlist')){
    movieWatchlist = JSON.parse(localStorage.getItem('watchlist'))
    renderMovies(movieWatchlist)
}

document.addEventListener('click', function(e){
    if(e.target.dataset.remove){
        removeFromWatchlist(e.target.dataset.remove)
    }
})

function removeFromWatchlist(index){
    movieWatchlist.splice(index, 1)
    localStorage.setItem('watchlist', JSON.stringify(movieWatchlist))
    renderMovies(movieWatchlist)
}

function renderMovies(movieList){
    let movieHtml = ''
    movieList.forEach(function (movieData, index) {
        movieHtml += `
            <div class="movie">
                <img class="movie-poster" src="${movieData.Poster}" alt="Poster for ${movieData.Title}">
                <div class="movie-info">
                    <div class="movie-header">
                        <h3>${movieData.Title}</h3>
                        <img src="images/star.svg" alt="rating icon">
                        <p>${movieData.imdbRating}</p>
                    </div>
                    <div class="movie-details">
                        <p class="info-el">${movieData.Runtime}</p>
                        <p class="info-el">${movieData.Genre}</p>
                        <div class="remove-watchlist-btn" data-remove='${index}'>
                            <img src="images/minus.svg" alt="remove from watchlist button" data-remove='${index}'>
                            <p data-remove='${index}'>Watchlist</p>
                        </div>
                    </div>
                    <p class="movie-description info-el">${movieData.Plot}</p>
                </div>
            </div>`
    });
    movieFeed.innerHTML = movieHtml
    movieFeed.style.backgroundImage = "none"
}