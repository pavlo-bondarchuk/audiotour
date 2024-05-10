document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM is ready');
    document.querySelector('.navbar-toggler').addEventListener('click', function () {
        document.querySelector('.navbar-toggler').classList.toggle('active');
    });
    if (window.innerWidth < 768) {
        document.querySelector('.navbar-toggler').addEventListener('click', function () {
            document.querySelector('.menu-mobile').classList.toggle('active');
        });
    }
});