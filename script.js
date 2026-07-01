// ===============================
// Date Request Website
// ===============================

// Current page
let currentPage = 1;

// Selected food
let selectedFood = "";

// Open a page
function nextPage(pageNumber) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page" + pageNumber).classList.add("active");

    currentPage = pageNumber;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ===============================
// Funny NO Button
// ===============================

const noBtn = document.getElementById("noBtn");

if (noBtn) {

    noBtn.addEventListener("mouseover", moveButton);
    noBtn.addEventListener("click", moveButton);

}

function moveButton() {

    let maxX = 250;
    let maxY = 180;

    let randomX = Math.floor(Math.random() * maxX) - 120;
    let randomY = Math.floor(Math.random() * maxY) - 90;

    noBtn.style.transform =
        `translate(${randomX}px, ${randomY}px)`;

}

// ===============================
// Food Selection
// ===============================

function selectFood(card) {

    document.querySelectorAll(".card").forEach(item => {
        item.classList.remove("selected");
    });

    card.classList.add("selected");

    selectedFood = card.innerText;

}

// ===============================
// Finish Button
// ===============================

function finish() {

    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (date === "") {
        alert("Please select a date ❤️");
        return;
    }

    if (time === "") {
        alert("Please select a time ❤️");
        return;
    }

    if (selectedFood === "") {
        alert("Please choose your food ❤️");
        return;
    }

    localStorage.setItem("date", date);
    localStorage.setItem("time", time);
    localStorage.setItem("food", selectedFood);

    document.getElementById("showDate").innerHTML =
        "📅 <strong>Date:</strong> " + date;

    document.getElementById("showTime").innerHTML =
        "⏰ <strong>Time:</strong> " + time;

    document.getElementById("showFood").innerHTML =
        "🍽️ <strong>Food:</strong> " + selectedFood;

    nextPage(4);

    startConfetti();

}

// ===============================
// Confetti Effect
// ===============================

function startConfetti() {

    for (let i = 0; i < 120; i++) {

        createHeart();

    }

}

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-20px";
    heart.style.fontSize = (Math.random() * 18 + 18) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let pos = -20;

    let speed = Math.random() * 3 + 2;

    let drift = (Math.random() - 0.5) * 2;

    const animation = setInterval(() => {

        pos += speed;

        heart.style.top = pos + "px";

        heart.style.left =
            parseFloat(heart.style.left) + drift + "px";

        if (pos > window.innerHeight) {

            clearInterval(animation);

            heart.remove();

        }

    }, 15);

}

// ===============================
// Enter Key Navigation
// ===============================

document.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        if (currentPage === 2) {

            nextPage(3);

        }

    }

});

// ===============================
// Page Load Animation
// ===============================

window.onload = function () {

    document.body.style.opacity = "1";

};

flatpickr("#date", {
    minDate: "today",
    dateFormat: "F j, Y",
    altInput: true,
    altFormat: "F j, Y",
    disableMobile: true,
    animate: true
});