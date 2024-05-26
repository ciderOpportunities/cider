
$(document).ready(function() {
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
});

$(document).ready(function () {
  
    'use strict';
    
     var c, currentScrollTop = 0,
         navbar = $('nav');
  
     $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();
       
        currentScrollTop = a;
       
        if (c < currentScrollTop && a > b + b) {
          navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
          navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
       
       console.log(a);
    });
    
  });
