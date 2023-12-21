var modal = document.getElementById("myModal");
var hamburgerIcon = document.querySelector(".hamburger");
var closeIcon = document.querySelector(".close");
var screen = window.matchMedia("(max-width: 900px)");
screen.addEventListener("change", wanting);
function wanting() {
  if (!screen.matches) {
    modal.style.display = "none";
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "none";
  } else {
    modal.style.display = "none";
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
}

function toggleOpen() {
  modal.style.display = "block";
  hamburgerIcon.style.display = "none";
  closeIcon.style.display = "block";
}
function toggleClose() {
  modal.style.display = "none";
  hamburgerIcon.style.display = "block";
  closeIcon.style.display = "none";
}
