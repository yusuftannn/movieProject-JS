const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1]
const clear = document.querySelector("#clear-films")

// Tüm eventleri yükleme
eventListeners()
function eventListeners() {
    form.addEventListener("submit", addFilm)
    document.addEventListener("DOMContentLoaded", function () {
        let films = Storage.getFilmsStorage();
        UI.loadAllFilms(films);
    })
    cardBody.addEventListener("click", deleteFilm)  // Filmleri arayüzden silme
    clear.addEventListener("click", clearAllFilms) // Tüm filmleri silme
}
function addFilm(e) {
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value

    if (title === "" || director === "" || url === "") {
        // HATA
        UI.displayMessages("Tüm alanları doldurun...", "danger")

    } else {
        // Yeni film
        const newFilm = new Film(title, director, url)
        UI.addFilmToUI(newFilm) // Arayüze film ekleme
        Storage.addFilmToStorage(newFilm) // Storage'a Film Ekleme
        UI.displayMessages("Film başarıyla eklendi...", "primary")
    }

    UI.clearInputs(titleElement, urlElement, directorElement)
    e.preventDefault()
}
// Filmleri arayüzden silme
function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target)
        // Filmleri storagedan silme
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)

        UI.displayMessages("Silme işlemi başarılı...", "primary")
    }
}
// Tüm filmleri silme
function clearAllFilms() {
    if (confirm("Emin misiniz ?")) {
        UI.clearAllFilmsFromUI()
        Storage.clearAllFilmsFromStorage()
    }
}