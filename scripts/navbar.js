
    // Move page content down when navbar is expanded
    $('.navbar-toggler').on('click', function() {
        const navbarHeight = $('.navbar').outerHeight();
        const expandedHeight = $('.navbar-collapse').outerHeight();
        const isExpanded = $(this).attr('aria-expanded') === 'true';

        if (isExpanded) {
            $('main').css('margin-top', ''); // Reset margin-top when menu is closed
        } else {
            $('main').css('margin-top', `${navbarHeight}px`); // Set margin-top based on expanded menu height
        }
    });

    $('.navbar-collapse').on('hidden.bs.collapse', function () {
        $('main').css('margin-top', ''); // Reset margin-top when menu is closed
    });

    $('.navbar-collapse').on('shown.bs.collapse', function () {
        const navbarHeight = $('.navbar').outerHeight();
        const  expandedHeight = $('.navbar-collapse').outerHeight();
        $('main').css('margin-top', `${expandedHeight}px`); // Set margin-top based on expanded menu height
    });