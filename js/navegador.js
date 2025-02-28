document.addEventListener("DOMContentLoaded", function () {
    fetch("../html/navegador.html")
        .then(response => response.text())
        .then(data => {
            document.getElementsByClassName("navegador")[0].innerHTML = data;
        })
        .catch(error => console.error("Error loading navegador:", error));
});