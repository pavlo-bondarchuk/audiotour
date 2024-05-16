document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM is ready');
    document.querySelector('.navbar-toggler').addEventListener('click', function () {
        document.querySelector('.navbar-toggler').classList.toggle('active');
    });
    if (window.innerWidth < 768) {
        document.querySelector('.navbar-toggler').addEventListener('click', function () {
            document.querySelector('.menu-mobile').classList.toggle('active');
        });
        const swiper = new Swiper('.functions--grid', {
            loop: true,
            slidesPerView: 1.5,
            sliderPerSlide: 1,
            spaceBetween: 13,
            centeredSlides: true,
        });
    }
});