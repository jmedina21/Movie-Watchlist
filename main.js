const searchBtn = document.getElementById("search-btn")
const searchInput = document.getElementById("search-input")
const movieFeed = document.getElementById('movie-feed')

searchBtn.addEventListener("click", async function () {
    let res = fetch(`http://www.omdbapi.com/?apikey=84d8cf6b&s=${searchInput.value}`)
    let data = await (await res).json()
    console.log(data.Search)
    // renderMovies(data)
})

// function renderMovies(data) {
//     let movieHtml = ''
//     data
// }
