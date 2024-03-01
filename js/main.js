const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/* Remove menu when click  */

const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*  End nav and menu  */

/* Blur Header */

const scroolHeader = () => {
  document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("scrolling")
    : header.classList.remove("scrolling");
};
window.addEventListener("scroll", scroolHeader);

/* Arrow */
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/* Scroll Animation */
const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  opacity: 1,
  scale: 1.1,
  duration: 2500,
  delay: 300,
});
sr.reveal(`.home__date, .about__img, .about__data, .visit__data`);
sr.reveal(`.home__image, .footer__img-1`, { rotate: { z: -15 } });
sr.reveal(`.home__bread`, { rotate: { z: 15 } });
sr.reveal(`.home__footer`, { scale: 1, origin: "bottom" });
sr.reveal(`.new__card:nth-child(1) img`, { rotate: { z: -30 }, distance: 0 });
sr.reveal(`.new__card:nth-child(2) img`, {
  rotate: { z: 15 },
  distance: 0,
  delay: 600,
});
sr.reveal(`.new__card:nth-child(3) img`, {
  rotate: { z: -30 },
  distance: 0,
  delay: 900,
});
sr.reveal(`.favorite__card img`, {
  interval: 100,
  rotate: { z: 15 },
  distance: 0,
});
sr.reveal(`.favorite__container`, {
  scale: 1,
});
