let themeBtn = document.getElementById('themeBtn');
let bookBtn = document.getElementById('bookBtn');
const rideCard = document.getElementById("rideCard");
const status = document.getElementById("status");

themeBtn.addEventListener('click', () => {

    document.body.classList.toggle("dark");
    rideCard.classList.toggle("dark");
    if (rideCard.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Light Mode";

    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
})

bookBtn.addEventListener("click", function () {
    bookBtn.setAttribute("disabled", "true"); // button becomes unclickable
    status.textContent = "🔍 Searching for a driver...";

    //**************Async JS*********//
    setTimeout(function () {
        status.textContent = "✅ Driver found! Arriving in 3 mins";
        rideCard.classList.add("confirmed");
        bookBtn.textContent = "Booked";
    }, 1500);
});
