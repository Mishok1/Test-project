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


//counter

const deadline = 'February 16 2024 23:59:59 GMT+0200'

function getTimeRemaining(endtime){
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(endtime) {
  // const clock = document.getElementById(id);
  const timeinterval = setInterval(() => {
    const t = getTimeRemaining(endtime);
    document.getElementById('hours').innerText = t.days;
    document.getElementById('minutes').innerText = t.minutes;
    document.getElementById('seconds').innerText = t.seconds;
  },1000);
}

initializeClock(deadline);
