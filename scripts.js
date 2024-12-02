const movies = [
    { title: "Film 1", url: "https://galtro.xyz/films/?b=1234811" },
    { title: "Film 2", url: "https://galtro.xyz/films/?b=974576" },
    { title: "Film 3", url: "https://galtro.xyz/films/?b=1241982" },
];

document.addEventListener("DOMContentLoaded", () => {
    loadMovies();
});

function loadMovies() {
    const moviesList = document.getElementById("movies-list");
    moviesList.innerHTML = "";
    movies.forEach((movie) => {
        const movieDiv = document.createElement("div");
        movieDiv.className = "movie-item";
        movieDiv.innerHTML = `
            <h3>${movie.title}</h3>
            <button onclick="playVideo('${movie.url}')">Regarder</button>
        `;
        moviesList.appendChild(movieDiv);
    });
}

function playVideo(videoUrl) {
    const videoPlayer = document.getElementById("video-player");
    const videoSource = document.getElementById("video-source");
    videoSource.src = videoUrl;
    videoPlayer.load();
    videoPlayer.play();
}