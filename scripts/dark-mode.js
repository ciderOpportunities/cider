$(document).ready(function() {
    // Dark Mode Toggle
    $('#darkModeToggle').on('change', function() {
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
        $('.modal-content').toggleClass('dark-mode'); // Add this line
    });

    // Scroll to Top Button
    const scrollToTopBtn = $('.scroll-to-top');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            scrollToTopBtn.fadeIn();
        } else {
            scrollToTopBtn.fadeOut();
        }
    });

    scrollToTopBtn.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });

    // Count and update job postings
    function updateJobCount() {
        const jobCount = $('.job-post').length;
        $('#jobCount').text(jobCount);
    }

 
});
