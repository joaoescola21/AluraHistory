document.getElementById("demo").innerHTML = "Hello JavaScript";

document.getElementById("demo").style.fontSize = "70px";
document.getElementById("demo").style.display = "block";
document.getElementById("demo").style.display = "none";


document.getElementById("mano").style.fontSize = "70px";
document.getElementById("mano").style.display = "block";
document.getElementById("mano").style.display = "none";


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});