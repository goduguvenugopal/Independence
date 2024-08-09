//go up arrow  function
window.addEventListener("scroll", function () {
  const arrow = this.document.getElementById("arrow-card");
  if (window.scrollY > window.innerHeight * 2) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
});

//independence day count down function

// Set the date we're counting down to
const countdownDate = new Date("August 15, 2024 00:00:00").getTime();
// Update the countdown every 1 second
const countdownFunction = setInterval(() => {
  // Get today's date and time
  const now = new Date().getTime();
  // Find the distance between now and the countdown date
  const distance = countdownDate - now;
  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="countdown"
  document.getElementById(
    "countdown"
  ).innerHTML = `Registration ends in : ${days}d ${hours}h ${minutes}m ${seconds}s`;
  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "Happy Independence Day!";
  }
}, 1000);

// countdownCard display none and hide logic
const countdownCard = document.getElementById("countdown-card");
const closeCountBt = document.getElementById("close-count-bt");

window.addEventListener("load", () => {
  setTimeout(() => {
    countdownCard.style.display = "block";
  }, 1200);
});

closeCountBt.addEventListener("click", () => {
  countdownCard.style.display = "none";
});

// password toggle function
const eyeOpen = document.getElementById("eye-open");
const eyeClose = document.getElementById("eye-close");
const passInput = document.getElementById("pass");
const eyeOpen1 = document.getElementById("eye-open1");
const eyeClose1 = document.getElementById("eye-close1");
const passInput1 = document.getElementById("pass1");

eyeOpen.addEventListener("click", () => {
  eyeOpen.style.display = "none";
  eyeClose.style.display = "block";
  passInput.type = "password";
});

eyeClose.addEventListener("click", () => {
  eyeOpen.style.display = "block";
  eyeClose.style.display = "none";
  passInput.type = "text";
});

eyeOpen1.addEventListener("click", () => {
  eyeOpen1.style.display = "none";
  eyeClose1.style.display = "block";
  passInput1.type = "password";
});

eyeClose1.addEventListener("click", () => {
  eyeOpen1.style.display = "block";
  eyeClose1.style.display = "none";
  passInput1.type = "text";
});

document.addEventListener('click', function(event) {
    // Get the navbar and the toggler button
    const navbar = document.getElementById('navbarNavAltMarkup');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Check if the navbar is open and the click target is not inside the navbar or the toggler button
    if (navbar.classList.contains('show') && !navbar.contains(event.target) && !navbarToggler.contains(event.target)) {
        // Collapse the navbar
        navbarToggler.click();
    }
});
