function Storage() {

}
Storage.prototype.addFilmToStorage = function (newFilm) {
    let films = this.getFilmsStorage()

    films.push(newFilm)
    localStorage.setItem("films", JSON.stringify(films))
}

Storage.prototype.getFilmsStorage = function () {
    let films
    if (localStorage.getItem("films") === null) {
        films = []
    } else {
        films = JSON.parse(localStorage.getItem("films"))
    }

    return films;
}