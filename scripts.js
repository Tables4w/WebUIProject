window.addEventListener('DOMContentLoaded', function() {
    var navmenu = document.getElementById("navmenu");
    var navbarbutton = document.getElementById("navbar-toggle");

    navbarbutton.addEventListener('click', function(event) {
    navmenu.classList.toggle("navMenuOpened");
    console.log(navmenu.className);
    });

  });