// Get modal, button and close span
const modal = document.getElementById("serviceModal");
const servicesBtn = document.getElementById("servicesBtn");
const closeBtn = document.querySelector(".close");

// Open modal when Services clicked
servicesBtn.onclick = function () {
    modal.style.display = "block";
};

// Close modal when (x) clicked
closeBtn.onclick = function () {
    modal.style.display = "none";
};

// Close modal when clicked outside content
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};