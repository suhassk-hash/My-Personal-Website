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
        navBarR.style.width = "90%";
        navBarR.style.marginTop = "40%";
        navBarR.style.padding = "2% 2% 2% 4%";
        navBarR.style.color = "#e6f3ff";
    }
};