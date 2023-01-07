const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // mobile + tablet - 320-990
        320: {
            slidesPerView: 1
        },
        // desktop >= 991
        991: {
            slidesPerView: 2
        }
    }
});