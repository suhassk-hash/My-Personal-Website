document.addEventListener("DOMContentLoaded", function() {
    const navBarIcon = document.querySelector(".Nav-bar-icon");
    const navBarR = document.querySelector(".Nav-bar-r");

    navBarIcon.addEventListener("click", function() {
        if (navBarR.style.display === "block") {
            navBarR.style.display = "none";
        } else {
            navBarR.style.display = "block";
        }
    });
});