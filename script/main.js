const navBarIcon = document.querySelector(".Nav-bar-icon");
const navBarR = document.querySelector(".Nav-bar");
const windowSize=document.documentElement.clientWidth;
navBarIcon.style.position = "fixed"; 
navBarIcon.style.top = "0"; 
navBarIcon.style.right = "6%";
navBarIcon.onclick = responsive;
function responsive() {
    if (navBarR.style.display === "flex") {
        navBarR.style.display = "none";
    } else {
        navBarR.style.display = "flex";
        navBarR.style.opacity = "1";
        navBarR.style.width = "90%";
        navBarR.style.color = "#e6f3ff";
    }
};