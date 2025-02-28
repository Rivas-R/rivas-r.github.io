document.addEventListener("DOMContentLoaded", function () {
    fetch("../html/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementsByClassName("footer")[0].innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});