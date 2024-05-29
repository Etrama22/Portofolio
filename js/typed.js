document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".typed", {
    strings: ["Muhammad"],
    typeSpeed: 80,
    // backSpeed: 50,
    loop: false,
    onComplete: function (self) {
      self.cursor.remove();
      document.querySelector(".typed2").style.display = "inline";
    },
  });
});
