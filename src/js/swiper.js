// import Swiper JS
import Swiper from 'swiper/swiper-bundle';

// Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});
