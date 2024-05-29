function loadContent(url, elementId) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = xhr.responseText;
      } else {
        console.error(`Element with ID ${elementId} not found.`);
      }
    }
  };
  xhr.send();
}

window.onload = function () {
  loadContent("navbar.html", "navbar-placeholder");
  loadContent("footer.html", "footer-placeholder");
};

// Function to add 'active' class to the current page link in the navigation
function setActivePage() {
  // Get the current URL path
  var path = window.location.pathname;
  // Get the filename from the URL path
  var page = path.split("/").pop();

  // Get all navigation links
  var navLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link");

  // Loop through each navigation link
  navLinks.forEach(function (link) {
    // Get the href attribute of the link
    var href = link.getAttribute("href");

    // Check if the link's href matches the current page
    if (href === page || (href === "" && page === "index.html")) {
      // Remove 'active' class from any previously active links
      var activeLinks = document.querySelectorAll(".nav-link .active");
      activeLinks.forEach(function (activeLink) {
        activeLink.classList.remove("active");
      });

      // Add 'active' class to the parent <li> of the link
      link.parentNode.classList.add("active");
    }
  });
}
