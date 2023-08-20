const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

loop: true,


pagination: {
el: '.swiper-pagination',
clickable: true
},


navigation: {
nextEl: '.swipers-button-next',
prevEl: '.swipers-button-prev',
},

});