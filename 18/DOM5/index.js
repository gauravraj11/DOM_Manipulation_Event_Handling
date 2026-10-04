const stars = document.querySelectorAll(".star");
const ratingText = document.getElementById("ratingText");

stars.forEach(function (star) {
  star.addEventListener("click", function () {
    const selectedIndex = parseInt(star.getAttribute("data-index"));

    stars.forEach(function (s) {
      const sIndex = parseInt(s.getAttribute("data-index"));
      if (sIndex <= selectedIndex) {
        s.classList.add("filled");
      } else {
        s.classList.remove("filled");
      }
    });

    ratingText.textContent = "You rated " + selectedIndex + "/5";
  });
});
