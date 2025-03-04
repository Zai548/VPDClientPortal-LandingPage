document.addEventListener("DOMContentLoaded", function () {
  const navEl = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 60) {
      navEl.classList.add("scrolled");
    } else {
      navEl.classList.remove("scrolled");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section"); // Select all sections
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function changeActiveLink() {
    let scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Adjust for navbar height
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        const targetId = section.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.remove("active"); // Remove active class from all links
          if (link.getAttribute("href") === `#${targetId}`) {
            link.classList.add("active"); // Add active class to the matching link
          }
        });
      }
    });
  }

  window.addEventListener("scroll", changeActiveLink);
});

// Ensure script runs only when the page loads completely
document.addEventListener("DOMContentLoaded", function () {
  const processImage = document.getElementById("process-image");
  const steps = document.querySelectorAll(".process-style div");

  steps.forEach((step) => {
    step.addEventListener("mouseenter", function () {
      processImage.src = step.getAttribute("data-image");
    });

    step.addEventListener("mouseleave", function () {
      processImage.src = "Resources/easystep.png"; // Revert to default image
    });
  });
});
