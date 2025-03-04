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
  const sections = document.querySelectorAll(".section-div"); // Select all sections
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

document.addEventListener("DOMContentLoaded", function () {
  const defaultImage = document.getElementById("default-image");
  const images = document.querySelectorAll(".process-image-wrapper img");
  const steps = document.querySelectorAll(".process-style-box ");

  steps.forEach((step) => {
    step.addEventListener("mouseenter", function () {
      let targetId = step.getAttribute("data-target");

      images.forEach((img) => img.classList.remove("active")); // Hide all images
      document.getElementById(targetId).classList.add("active"); // Show target image
    });

    step.addEventListener("mouseleave", function () {
      images.forEach((img) => img.classList.remove("active")); // Hide all images
      defaultImage.classList.add("active"); // Show default image again
    });
  });
});
