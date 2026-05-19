// Mobile menu toggle
var menuBtn = document.getElementById("menuBtn");
var navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// Close menu when a nav link is clicked
var links = navLinks.querySelectorAll("a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
}

// Navbar shadow on scroll
var navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Contact form (static demo — no server)
var contactForm = document.getElementById("contactForm");
var formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value.trim();
  var danceSelect = document.getElementById("dance");
  var danceName = danceSelect.options[danceSelect.selectedIndex].text;

  if (danceSelect.value === "") {
    formMessage.textContent = "Thank you, " + name + "! We will contact you soon.";
  } else {
    formMessage.textContent =
      "Thank you, " + name + "! Your interest in " + danceName + " is noted. We will call you soon.";
  }

  formMessage.className = "form-message success";
  contactForm.reset();

  setTimeout(function () {
    formMessage.textContent = "";
    formMessage.className = "form-message";
  }, 5000);
});

// Simple fade-in for dance cards when they scroll into view
var danceCards = document.querySelectorAll(".dance-card");

if ("IntersectionObserver" in window) {
  var observer = new IntersectionObserver(
    function (entries) {
      for (var j = 0; j < entries.length; j++) {
        if (entries[j].isIntersecting) {
          entries[j].target.classList.add("card-visible");
          observer.unobserve(entries[j].target);
        }
      }
    },
    { threshold: 0.15 }
  );

  for (var k = 0; k < danceCards.length; k++) {
    observer.observe(danceCards[k]);
  }
} else {
  for (var m = 0; m < danceCards.length; m++) {
    danceCards[m].classList.add("card-visible");
  }
}
