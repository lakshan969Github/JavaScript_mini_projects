const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function () {
    //long method
    /*
    if (links.classList.contains("show-links")) {
        links.classList.remove("show-links");
    }
    else {
        links.classList.add("show-links");
    }*/
    
    // short method
    links.classList.toggle("show-links");
});