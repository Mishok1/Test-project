import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  draggable: true,

  pagination: {
    enabled: true,
    clickable: true,
    type: 'bullets',
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

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
  const timeinterval = setInterval(() => {
    const t = getTimeRemaining(endtime);

    const hoursStr = t.hours < 10? `0${t.hours}` : `${t.hours}`
    const minutesStr = t.minutes < 10? `0${t.minutes}` : `${t.minutes}`
    const secondsStr = t.seconds < 10? `0${t.seconds}` : `${t.seconds}`

    const hoursHTML = `<span class='num'>${hoursStr[0]}</span> <span class='num'>${hoursStr[1]}</span>`
    const minutesHTML = `<span class='num'>${minutesStr[0]}</span> <span class='num'>${minutesStr[1]}</span>`
    const secondsHTML = `<span class='num'>${secondsStr[0]}</span> <span class='num'>${secondsStr[1]}</span>`


    document.getElementById('hours').innerHTML = hoursHTML
    document.getElementById('minutes').innerHTML = minutesHTML
    document.getElementById('seconds').innerHTML = secondsHTML
  },1000);
}

initializeClock(deadline);
