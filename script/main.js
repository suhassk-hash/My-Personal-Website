    const navBarIcon = document.querySelector(".Nav-bar-icon");
    const navBarR = document.querySelector(".Nav-bar-r");
     navBarIcon.onclick=responsive;
        function responsive() {
            if (navBarR.style.display === "block") {
                navBarR.style.display = "none";
                navBarIcon.style.marginTop = "0";
            } else {
                navBarIcon.style.marginTop = "-25%";
                navBarIcon.style.right = "0px";
                navBarR.style.display = "block";
                navBarR.style.opacity = "100%";
                navBarR.style.width = "90%";
                navBarR.style.marginTop = "25%"; 
                navBarR.style.padding = "2% 2% 2% 4%";
                navBarR.style.color = "#e6f3ff";
                navBarR.style.boxShadow = "0 2px 4px rgba(194, 183, 183, 0.808)";
            }
        };    