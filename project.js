const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// UI Object Start
const ui = new UI()

// Storage Objesi Üret
const storage = new Storage()

// Tüm eventleri yükleme
eventListeners()
function eventListeners() {
    form.addEventListener("submit", addFilm)
    document.addEventListener("DOMContentLoaded", function () {
        let films = storage.getFilmsStorage();
        ui.loadAllFilms(films);
    })
}
function addFilm(e) {
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value

    if (title === "" || director === "" || url === "") {
        // HATA
        ui.displayMessages("Tüm alanları doldurun...", "danger")

    } else {
        // Yeni film
        const newFilm = new Film(title, director, url)
        ui.addFilmToUI(newFilm) // Arayüze film ekleme
        storage.addFilmToStorage(newFilm) // Storage'a Film Ekleme
        ui.displayMessages("Film başarıyla eklendi...", "primary")
    }

    ui.clearInputs(titleElement, urlElement, directorElement)
    e.preventDefault()
}
