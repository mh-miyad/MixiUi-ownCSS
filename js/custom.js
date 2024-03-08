//  Add To Cart Functionality
const cartButtons = document.querySelectorAll(".badgeBox");
const addButtons = document.querySelector(".addToCart");
let count = 1;
addButtons.addEventListener("click", () => {
  cartButtons.forEach((cartButton) => {
    cartButton.textContent = count;
  });
  count++;
});
//  Add To Cart Functionality
//?  Add Here Swiper Js Code

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    890: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1320: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

//?  Add Here Swiper Js Code
