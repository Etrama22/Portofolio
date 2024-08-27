// Navbar Function
function loadContent(url, elementId, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = xhr.responseText;
        if (callback) {
          callback();
        }
      } else {
        console.error(`Element with ID ${elementId} not found.`);
      }
    }
  };
  xhr.send();
}

// Function to add 'active' class to the current page link in the navigation
function setActivePage() {
  console.log("setActivePage dipanggil");
  const url = new URL(window.location.href);
  const activePage = url.pathname.replace(/^\//, ""); // hilangkan awalan /
  console.log("activePage:", activePage);

  var navLinks = document.querySelectorAll(
    ".offcanvas-body .navbar-nav .nav-item .nav-link"
  );
  console.log("navLinks:", navLinks);

  navLinks.forEach((link) => {
    console.log("link:", link);
    if (link.getAttribute("data-section") === activePage) {
      link.classList.add("active");
      console.log("link aktif:", link);
    }
  });
}

window.onload = function () {
  loadContent("navbar.html", "navbar-placeholder", setActivePage);
  loadContent("footer.html", "footer-placeholder");
};
