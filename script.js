function isMobileScreen() {
  return window.matchMedia("(max-width: 600px)").matches;
}

// Your code that should only run on mobile screens
function applyMobileCode() {
  // Add your mobile-specific code here

  function toggleIcons() {
    var modal = document.getElementById("myModal");
    var hamburgerIcon = document.querySelector(".hamburger");
    var closeIcon = document.querySelector(".close");

    if (modal.style.display === "block") {
      modal.style.display = "none";
      hamburgerIcon.style.display = "block";
      closeIcon.style.display = "none";
    } else {
      modal.style.display = "block";
      hamburgerIcon.style.display = "none";
      closeIcon.style.display = "block";
    }
  }
}

// Check screen size and apply code if on a mobile screen
if (isMobileScreen()) {
  applyMobileCode();
}
