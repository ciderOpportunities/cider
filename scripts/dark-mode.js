$(document).ready(function () {
    // Dark Mode Toggle
    $('#darkModeToggle').on('change', function () {
        $('body').toggleClass('dark-mode');
        $('.navbar').toggleClass('dark-mode');
        $('.nav-link').toggleClass('dark-mode');
        $('.sidebar').toggleClass('dark-mode');
        $('.container').toggleClass('dark-mode');
        $('footer').toggleClass('dark-mode');
        $('.opportunity-card').toggleClass('dark-mode');
        $('.footer-logo-container').toggleClass('dark-mode');
        $('.footer-section').toggleClass('dark-mode');
        $('.footer-bottom').toggleClass('dark-mode');
        $('.job-count').toggleClass('dark-mode');
        $('.modal-content').toggleClass('dark-mode');
        $('.btn-close').toggleClass('dark-mode');
        $('.menu').toggleClass('dark-mode');
        $('.dropicon').toggleClass('dark-mode');
        $('.dropdown-menu').toggleClass('dark-mode');
        $('.navbar-brand').toggleClass('dark-mode');
    });
    document.getElementById('darkModeToggle').addEventListener('change', function () {
        const darkModeIcon = document.getElementById('darkModeIcon');
        if (this.checked) {
            darkModeIcon.classList.remove('bi-moon-fill');
            darkModeIcon.classList.add('bi-sun-fill');

        } else {
            darkModeIcon.classList.remove('bi-sun-fill');
            darkModeIcon.classList.add('bi-moon-fill');

        }
    });



});




