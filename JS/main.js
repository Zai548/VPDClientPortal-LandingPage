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

document
  .querySelectorAll(".carousel-inner .carousel-item img")
  .forEach((image) => {
    image.onclick = () => {
      const popup = document.querySelector(".carousel-popup-img");
      const popupImg = document.querySelector("#popup-img");
      const navbar = document.querySelector(".navbar");

      if (popup && popupImg && navbar) {
        popup.style.display = "block";
        popupImg.src = image.getAttribute("src");

        // Instead of hiding navbar completely, make it invisible
        navbar.style.visibility = "hidden";
        navbar.style.opacity = "0";
        navbar.style.transition = "opacity 0.3s ease";

        // Update the active thumbnail
        updateActiveThumbnail(popupImg.src);
      }
    };
  });

// Close the popup
document.querySelector(".carousel-popup-img span").onclick = () => {
  const popup = document.querySelector(".carousel-popup-img");
  const navbar = document.querySelector(".navbar");

  if (popup && navbar) {
    popup.style.display = "none";

    // Make navbar visible again
    navbar.style.visibility = "visible";
    navbar.style.opacity = "1";
  }
};

// Change the main image when a thumbnail is clicked and highlight the active thumbnail
function changeImage(thumbnail) {
  const popupImg = document.querySelector("#popup-img");
  popupImg.src = thumbnail.src;

  // Update the active thumbnail
  updateActiveThumbnail(thumbnail.src);
}

// Function to highlight the active thumbnail
function updateActiveThumbnail(currentSrc) {
  document.querySelectorAll(".carousel-thumbnails img").forEach((thumb) => {
    if (thumb.src === currentSrc) {
      thumb.classList.add("active-thumbnail");
    } else {
      thumb.classList.remove("active-thumbnail");
    }
  });
}
