
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
      document.addEventListener("contextmenu", (event) =>
        event.preventDefault()
      );
      // Preventing users to copy the contents
      document.addEventListener("copy", (event) => event.preventDefault());
