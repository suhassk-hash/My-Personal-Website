const navBarIcon = document.querySelector(".Nav-bar-icon");
const navBarR = document.querySelector(".Nav-bar-r");
navBarIcon.style.position = "fixed"; 
navBarIcon.style.top = "0"; 
navBarIcon.style.right = "0";
navBarIcon.onclick = responsive;

function responsive() {
    if (navBarR.style.display === "block") {
        navBarR.style.display = "none";
    } else {
        navBarR.style.display = "block";
        navBarR.style.opacity = "100%";
        navBarR.style.width = "100%";
        navBarR.style.marginTop = "30%";
        navBarR.style.padding = "2rem 2rem 2rem 4rem";
        navBarR.style.color = "#e6f3ff";
        navBarR.style.boxShadow = "0 2px 4px rgba(194, 183, 183, 0.808)";
    }
};