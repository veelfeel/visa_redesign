const burger = document.querySelector(".burger");
const list = document.querySelector(".menu-list");
const mobileMenu = document.querySelector(".mobile-menu");
const header = document.querySelector("header");

burger.addEventListener("click", () => {
  list.classList.toggle("menu-list--active");
  burger.classList.toggle("burger--active");
});

document.addEventListener("click", (e) => {
  if (
    !mobileMenu.contains(e.target) ||
    e.target.parentNode.classList.contains("menu-item")
  ) {
    list.classList.remove("menu-list--active");
    burger.classList.remove("burger--active");
  }
});

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    header.style.top = "-95px";
  } else {
    header.style.top = "0";
  }

  lastScrollTop = scrollTop;
});
