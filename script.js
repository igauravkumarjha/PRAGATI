// ✅ LOGIN PAGE FUNCTIONALITY
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Page reload hone se rokna

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email !== "" && password !== "") {
            window.location.href = "dashboard.html";
        } else {
            alert("Please enter both email and password.");
        }
    });
}

// ✅ SERVICES MODAL FUNCTIONALITY (Dashboard Page)
const modal = document.getElementById("serviceModal");
const btn = document.getElementById("servicesBtn");
const span = document.querySelector(".close");

if (btn && modal && span) {
    // When the user clicks on the Services button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}
