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

function updateTime() {
    var now = moment(new Date()); //todays date
    var end = moment('2023-01-17'); // another date
    var duration = moment.duration(now.diff(end));
    var time = end.diff(now);
    var days = end.diff(now, 'days');
    var hours = end.diff(now, 'hours');

    $('#days').text(moment.utc(time).format('DD'))
    $('#hours').text(moment.utc(time).format('HH'))
    $('#minutes').text(moment.utc(time).format('mm'))
    $('#seconds').text(moment.utc(time).format('ss'))
}

updateTime()

setInterval(() => {
    updateTime()
}, 1000);
