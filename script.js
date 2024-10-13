function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

function toggleMore(id) {
  const moreText = document.getElementById(id);
  if (moreText.style.display === "none") {
    moreText.style.display = "inline"; // Show the additional content
  } else {
    moreText.style.display = "none"; // Hide the additional content
  }
}
// Hiding my source code from the user
document.addEventListener("contextmenu", (event) => event.preventDefault());
// Preventing users to copy the contents
document.addEventListener("copy", (event) => event.preventDefault());

// Function to open a simple calculator in a new window
function openCalculator() {
  const calculatorWindow = window.open(
    "SimpleCalculator.html",
    "Simple Calculator",
    "width=500,height=500"
  );
}

function openTempConverter() {
  const tempConverterWindow = window.open(
    "SimpleTemperatureConverter.html",
    "Simple Temperature Converter",
    "width=500",
    (height = "500")
  );
}
