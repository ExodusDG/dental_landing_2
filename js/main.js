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


var duration = moment.duration({
    'minutes': 5,
    'seconds': 00

});

var timestamp = new Date(0, 0, 0, 2, 10, 30);
var interval = 1;
var timer = setInterval(function () {
    timestamp = new Date(timestamp.getTime() + interval * 1000);

    duration = moment.duration(duration.asSeconds() - interval, 'seconds');
    var min = duration.minutes();
    var sec = duration.seconds();
    var hours = duration.hours();

    sec -= 1;
    if (min < 0) return clearInterval(timer);
    if (min < 10 && min.length != 2) min = '0' + min;
    if (sec < 0 && min != 0) {
        min -= 1;
        sec = 59;
    } else if (sec < 10 && length.sec != 2) sec = '0' + sec;

    $('#hours').text(hours)
    $('#minutes').text(min)
    $('#seconds').text(sec)
    if (min == 0 && sec == 0)
        clearInterval(timer);


}, 1000);