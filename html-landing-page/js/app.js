const navbarToggler = document.getElementById("navbar-btn");
const navbarNav = document.querySelector(".navbar-nav");
const navLinks = document.querySelectorAll(".navbar-nav a");
const header = document.getElementById("main-header");
const themeToggler = document.getElementById("theme-toggler");
const contactForm = document.getElementById("contact-form");
const scrollToTop = document.querySelector(".scroll-to-top");

const THEME_KEY = "theme";

const reviewContent = document.querySelectorAll("#review-content");
const reviewNext = document.querySelector("#btn-next");
const reviewPrev = document.querySelector("#btn-prev");
const activeReview = document.querySelector(".review-container");

navbarToggler.addEventListener("click", () => {
  navbarToggler.classList.toggle("active");
  navbarNav.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("active");

    navLinks.forEach((item) => {
      if (item !== link) {
        item.classList.remove("active");
      }
    });
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("sticky");
    scrollToTop.classList.add("active");
  } else {
    header.classList.remove("sticky");
    scrollToTop.classList.remove("active");
  }

  applyAnimation();
});

themeToggler.addEventListener("change", () => {
  if (themeToggler.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem(THEME_KEY, "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem(THEME_KEY, "light");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  if (
    localStorage.getItem(THEME_KEY) === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggler.checked = true;
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggler.checked = false;
  }

  applyAnimation();
});

const flashStatus = (flashObject) => {
  const { title, message, status } = flashObject;

  const checkElement = document.getElementById("alert-message");

  if (checkElement) checkElement.remove();

  const alert = document.createElement("div");

  if (status === "success") {
    alert.classList.add("alert-success");
  } else {
    alert.classList.add("alert-danger");
  }

  alert.setAttribute("id", "alert-message");

  alert.innerHTML = `
    <h1>${title}</h1>
    <p>${message}</p>
  `;

  contactForm.insertBefore(alert, contactForm.firstChild);

  setTimeout(() => {
    alert.style.transform = "scale(0)";
    alert.remove();
  }, 3000);
};

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("form-name").value;
  const email = document.getElementById("form-email").value;
  const message = document.getElementById("form-message").value;

  if (name === "" || email === "" || message === "") {
    flashStatus({
      title: "Error",
      message: "Harap isi semua field yang diberikan",
      status: "danger",
    });
    return;
  }

  flashStatus({
    title: "Berhasil",
    message:
      "Pesan Anda berhasil dikirimkan, kami akan menghubungimu balik secepatnya.",
    status: "success",
  });
  contactForm.reset();
});

const applyAnimation = () => {
  const backInLeft = document.querySelectorAll("#animate__backInLeft");
  const backInRight = document.querySelectorAll("#animate__backInRight");
  const zoomInUp = document.querySelectorAll("#animate__zoomInUp");

  const windowHeight = window.innerHeight;

  const backInLeftAnimation = [
    "animate__animated",
    "animate__backInLeft",
    "animate__slow",
  ];

  const backInRightAnimation = [
    "animate__animated",
    "animate__backInRight",
    "animate__slow",
  ];

  const zoomInUpAnimation = [
    "animate__animated",
    "animate__zoomInUp",
    "animate__slow",
  ];

  for (const element of backInLeft) {
    if (element.getBoundingClientRect().top < windowHeight) {
      element.classList.add(...backInLeftAnimation);
    }
  }

  for (const element of backInRight) {
    if (element.getBoundingClientRect().top < windowHeight) {
      element.classList.add(...backInRightAnimation);
    }
  }

  for (const element of zoomInUp) {
    if (element.getBoundingClientRect().top < windowHeight) {
      element.classList.add(...zoomInUpAnimation);
    }
  }
};

document.querySelector(".navbar-brand a").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const getCurrentReview = () => {
  for (let i = 0; i < reviewContent.length; i++) {
    if (reviewContent[i].classList.contains("active")) {
      return i;
    }
  }
};

// Next Review
reviewNext.addEventListener("click", () => {
  const currentReview = getCurrentReview();
  if (currentReview === reviewContent.length - 1) {
    reviewContent[currentReview].classList.remove("active");
    reviewContent[0].classList.add("active");
  } else {
    reviewContent[currentReview].classList.remove("active");
    reviewContent[currentReview + 1].classList.add("active");
  }

  for (const review of reviewContent) {
    if (review.classList.contains("active")) {
      review.classList.add("animate__animated", "animate__fadeIn");
    } else {
      review.classList.remove("animate__animated", "animate__fadeIn");
    }
  }
});

// Previous Review
reviewPrev.addEventListener("click", () => {
  const currentReview = getCurrentReview();
  if (currentReview === 0) {
    reviewContent[currentReview].classList.remove("active");
    reviewContent[reviewContent.length - 1].classList.add("active");
  } else {
    reviewContent[currentReview].classList.remove("active");
    reviewContent[currentReview - 1].classList.add("active");
  }

  for (const review of reviewContent) {
    if (review.classList.contains("active")) {
      review.classList.add("animate__animated", "animate__fadeIn");
    } else {
      review.classList.remove("animate__animated", "animate__fadeIn");
    }
  }
});

// Dropdown Menu
document.getElementById("dropdown-toggler").addEventListener("click", () => {
  document.querySelector(".dropdown-menu").classList.toggle("show");
});
