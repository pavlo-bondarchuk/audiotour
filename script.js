document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM is ready');
    document.querySelector('.navbar-toggler').addEventListener('click', function () {
        document.querySelector('.navbar-toggler').classList.toggle('active');
    });
    if (window.innerWidth < 968) {
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
    function isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }
      
    function isAndroid() {
        return /Android/.test(navigator.userAgent);
    }
      
    function showButtonOnMobile() {
        var buttons = document.querySelectorAll(".favorites--columns-item-links .btn");
      
        for (var i = 0; i < buttons.length; i++) {
            var button = buttons[i];
            
            if (isIOS()) {
                button.style.display = button.id === "iOsBtn" ? "flex" : "none";
            } else if (isAndroid()) {
                button.style.display = button.id === "androidBtn" ? "flex" : "none";
            } else if (!isIOS() && !isAndroid()) {
                button.style.display = button.id === "otherOsBtn" ? "flex" : "none";
            }
        }
    }
      
    window.onload = showButtonOnMobile;     
            
});