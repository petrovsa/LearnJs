"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const tabs = document.querySelectorAll(".operations__tab");
const tabConatainer = document.querySelector(".operations__tab-container");
const contents = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const dots = document.querySelector(".dots");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const menuAnimation = function (e) {
  const link = e.target;
  if (link.classList.contains("nav__link")) {
    const sublinks = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    sublinks.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

btnsOpenModal.forEach((modal) => modal.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
// Scroll smooth
btnScrollTo.addEventListener("click", function (e) {
  // const coordsOfSection1 = section1.getBoundingClientRect();
  // console.log(coordsOfSection1);

  console.log(e.target.getBoundingClientRect());

  // console.log("Current X/Y", window.scrollX, window.scrollY);

  // console.log(
  //   "height/width of viewport",
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  //Scrolling
  // window.scrollTo(
  //   coordsOfSection1.left + window.scrollX,
  //   coordsOfSection1.top + window.scrollY
  // );
  //Modern variant
  section1.scrollIntoView({ behavior: "smooth" });
});

//Implementing Navigation
//Bad variant
// document.querySelectorAll(".nav__link").forEach((el) => {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });
//better variant
// 1. Add listener to parent element
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  const el = e.target;
  if (el.classList.contains("nav__link")) {
    const id = el.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//Tabs

//Bad practice

// tabs.forEach((t) => {
//   t.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log(t);
//   });
// });

//Best practice
tabConatainer.addEventListener("click", function (e) {
  const tab = e.target.closest(".operations__tab");
  if (!tab) return;
  console.log(tab);
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tab.classList.add("operations__tab--active");
  const con = document.querySelector(
    `.operations__content--${tab.dataset.tab}`
  );
  contents.forEach((c) => c.classList.remove("operations__content--active"));
  con.classList.add("operations__content--active");
});

//Fnimation of nav
// version 1
// nav.addEventListener("mouseover", function (e) {
//   menuAnimation(0.5, e);
// });
// nav.addEventListener("mouseout", function (e) {
//   menuAnimation(1, e);
// });

// version 2
nav.addEventListener("mouseover", menuAnimation.bind(0.5));
nav.addEventListener("mouseout", menuAnimation.bind(1));

// Sticky navigation

// const initialCoord = section1.getBoundingClientRect();

// window.addEventListener("scroll", function (e) {
//   if (window.scrollY >= initialCoord.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });
// Observer
const navHeight = nav.getBoundingClientRect().height;
const styckyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(styckyNav, {
  root: null,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// console.log(nav.getBoundingClientRect().height);
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observ) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.remove("section--hidden");
    observ.unobserve(entry.target);
  } else return;
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

const allImages = document.querySelectorAll("img[data-src]");

const lazyImage = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", function () {
      entry.target.classList.remove("lazy-img");
    });
    observer.unobserve(entry.target);
  } else return;
};

const imgObserver = new IntersectionObserver(lazyImage, {
  root: null,
  threshold: 0,
  rootMargin: "-200px",
});

allImages.forEach((image) => imgObserver.observe(image));

//Slider
const runSlider = function () {
  const slides = document.querySelectorAll(".slide");
  const leftBtn = document.querySelector(".slider__btn--left");
  const rightBtn = document.querySelector(".slider__btn--right");
  let currSlide = 0;
  const maxSlide = slides.length;

  const toSlide = function (s) {
    slides.forEach(
      (slide, idx) =>
        (slide.style.transform = `translateX(${100 * (idx - s)}%)`)
    );
  };

  const nextSlide = function () {
    if (currSlide === maxSlide - 1) {
      currSlide = 0;
    } else {
      currSlide++;
    }
    toSlide(currSlide);
    activateDots(currSlide);
  };

  const previousSlide = function () {
    if (currSlide === 0) {
      currSlide = maxSlide - 1;
    } else currSlide--;
    toSlide(currSlide);
    activateDots(currSlide);
  };

  const initSlide = function () {
    toSlide(0);
    createDots();
    activateDots(0);
  };

  rightBtn.addEventListener("click", nextSlide);
  leftBtn.addEventListener("click", previousSlide);

  //Key manipulation in slider
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") previousSlide();
  });

  //Dots
  const createDots = function () {
    slides.forEach((slide, idx) => {
      dots.insertAdjacentHTML(
        "beforeend",
        `
    <button class='dots__dot' data-slide='${idx}'><button>
    `
      );
    });
  };

  const activateDots = function (slide) {
    document.querySelectorAll(".dots__dot").forEach((slider) => {
      slider.classList.remove("dots__dot--active");
    });
    document
      .querySelector(`.dots__dot[data-slide='${slide}']`)
      .classList.add("dots__dot--active");
  };

  dots.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      toSlide(slide);
      activateDots(slide);
    }
  });
  initSlide();
};
runSlider();
//////////////////////////////////////////////////////////////////////////
