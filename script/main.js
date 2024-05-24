
    const navBarIcon = document.querySelector('.Nav-bar-icon');
  

    navBarIcon.onclick = function() {
        if (navBar.style.display === 'block') {
            navBar.style.display = 'none';
        } else {
            navBar.style.display = 'block';
        }
    };