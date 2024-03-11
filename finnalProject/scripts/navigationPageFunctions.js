function toggleMenu() {
    let links = document.getElementById("myNavLinks");

    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}