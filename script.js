function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

function toggleMore(id, event) {
  const moreText = document.getElementById(id);
  const moreBtn = event.target;

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    moreBtn.style.display = "none"; // Hide the "More" button after click
  }
}

// Hiding my source code from the user
document.addEventListener("contextmenu", (event) => event.preventDefault());
// Preventing users to copy the contents
document.addEventListener("copy", (event) => event.preventDefault());
