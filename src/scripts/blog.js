console.log('blog page');
import './common/water-effect/index-water.js';
import {initPreloader} from './common/preloader.js';
import {hamMenu} from './common/hamburgerMenu';
import {toggleClass, smoothScrollTo} from './common/helpers';
// import {blogNavigation} from './common/blogNavigation';

hamMenu();
initPreloader();
/* scroll down to blog section */
var downBtn = document.querySelector('.arrow-down ');
downBtn.addEventListener('click', function() {
    smoothScrollTo('blog', 400);
});

// $('.blog__navigation-toggle').click(function(){
//     $('.blog__navigation').toggleClass('active');
// });
//
// $(document).ready(function(){
//     $('a[href^="#"]').bind("click", function(e){
//         var anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $(anchor.attr('href')).offset().top
//         }, 1000);
//         e.preventDefault();
//     });
//     return false;
// });﻿
function blogNavigation() {
    window.hm = {};

    // window.hm.scrollBarWidth = helpers.getScrollbarWidth();
    window.hm.mobileSize = 480 - window.hm.scrollBarWidth;
    window.hm.tabletSize = 768 - window.hm.scrollBarWidth;
    window.hm.resizeLimit = 2000 - window.hm.scrollBarWidth;





    // ==============================
    // Save needed elements
    // ==============================
    var active_id,
        additional_offset = 60,
        menu = $(".blog__navigation"),
        menu_items = menu.find("li a"),
        scroll_items = menu_items.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) return item;
        });



    // =====================================
    // Sidemenu link smoothscroll handler
    // =====================================
    menu_items.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = (href === "#") ? 0 : $(href).offset().top - additional_offset;

        e.preventDefault();

        $("html, body").stop().animate({
            scrollTop: offsetTop
        }, 700, "swing");
    });



    // ======================================================
    // Articles scroll-spy handler and sidemenu positioning
    // ======================================================
    $(window).scroll(function() {
        var fromTop = $(this).scrollTop(),
            blog_nav_offset = $(".blog__navigation").offset().top,
            blog_nav_limit = $(".footer").offset().top - $(".blog__navigation-box").outerHeight(),
            current = scroll_items.map(function(){
                if ($(this).offset().top <= fromTop+additional_offset+1){
                    return this;
                }
            });

        current = current[current.length-1];
        var id = current && current.length ? current[0].id : "";

        if (active_id !== id) {
            active_id = id;
            menu_items.removeClass("active").filter("[href*=#" + id + "]").addClass("active");
        }

        // Sidemenu behaviour
        if(fromTop >= blog_nav_limit && $(window).width() > window.hm.tabletSize) {
            $(".blog__navigation-box").css({"position":"absolute", "top":blog_nav_limit + "px"});
        } else if (fromTop >= blog_nav_offset && $(window).width() > window.hm.tabletSize) {
            $(".blog__navigation-box").css({"position":"fixed", "top":0});
            $(".blog__navigation-box").addClass("nav-fixed");
        } else {
            $(".blog__navigation-box").css({"position":"relative"});
            $(".blog__navigation-box").removeClass("nav-fixed");
        }
    });



    // =====================================
    // Adaptive sidemenu checker
    // =====================================
    $(window).resize(function() {
        if($(window).width() <= window.hm.tabletSize){
            $(".blog__navigation-box").removeClass("nav-fixed");
            $(".blog__navigation-box").css({"position":"relative"});
        } else {
            if($("body").scrollTop() >= $(".blog").offset().top){
                $(".blog__navigation-box").css({"position":"fixed", "top":0});
                $(".blog__navigation-box").addClass("nav-fixed");
            }
        }
    });



    // ==============================
    // Sidemenu toggle button
    // ==============================
    $(".blog__navigation-toggle").click(function(){
        $(".blog__navigation").toggleClass("active");
    });

};

blogNavigation();