// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
// configure Swiper to use modules

const swiper = new Swiper('.swiper', {
  // Optional parameters
  modules: [Navigation, Pagination],
  loop: true,
  draggable: true,

  // If we need pagination
  pagination: {
    enabled: true,
    clickable: true,
    type: 'bullets',
    el: '.swiper-pagination',
  },

  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: none,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
    enabled: false,
  },
});
