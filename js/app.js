jQuery(function ($) {

    'use strict';

    // Disable Mouse Right On Click
    /*$(window).on('contextmenu', function () {
       return false;
    });*/

    // PreLoader
    $(window).on("load", function() {
        $(".pre-loader").fadeOut(function() {
            $(".loading-mask").fadeOut(800);
        });
    });

    // Nav Bar Menu In Mobile
    $('.navbar-mobile .mobile-menu .treeview .treeview-toggle').on('click', function () {
        if($(this).closest('.treeview').hasClass('open')) {
            $(this).closest('.treeview').removeClass('open').find('.treeview-menu').slideUp(800);
            $('.navbar-mobile .mobile-menu .treeview').removeClass('open').find('.treeview-menu').slideUp(800);
        } else {
            $('.navbar-mobile .mobile-menu .treeview').removeClass('open').find('.treeview-menu').slideUp(800);
            $(this).closest('.treeview').addClass('open').find('.treeview-menu').slideDown(800);
        }
    });
    $('.navbar-mobile .mobile-menu .treeview .treeview-sub-menu a').on('click', function () {
        if($(this).closest('.treeview-sub-menu').hasClass('open')) {
            $(this).closest('.treeview-sub-menu').removeClass('open').find('.treeview-sub-menu-treeview-menu').slideUp(800);
            $('.navbar-mobile .mobile-menu .treeview-sub-menu').removeClass('open').find('.treeview-sub-menu-treeview-menu').slideUp(800);
        } else {
            $('.navbar-mobile .mobile-menu .treeview-sub-menu').removeClass('open').find('.treeview-sub-menu-treeview-menu').slideUp(800);
            $(this).closest('.treeview-sub-menu').addClass('open').find('.treeview-sub-menu-treeview-menu').slideDown(800);
        }
    });
    $('.navbar-mobile-show a').on('click', function () {
       $('.navbar-mobile').addClass('open');
    });
    $('.navbar-mobile .close-mobile').on('click', function () {
        $('.navbar-mobile').removeClass('open');
    });

    // Down Button Click
    $('.back-to-top a').on('click', function () {
        $('html, body').animate({
            scrollTop: $('html, body').offset().top - 80
        }, 1000);
    });

    // Show Or Hide Back To Top Button
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 400) {
            $('.back-to-top').addClass('open');
        } else {
            $('.back-to-top').removeClass('open');
        }
    });


    // Owl Carousel Plugin Trigger
    if($('.testimonials.owl-carousel').length > 0) {
        $('.testimonials.owl-carousel').owlCarousel({
            items : 1,
            itemsDesktop : [1199, 1],
            itemsDesktopSmall : [979, 1],
            itemsTablet: [600, 1],
            itemsMobile : [479, 1],
            slideSpeed : 800,
            mouseDrag: false,
            pagination : false,
            navigation: true,
            navigationText: [
                "<span class='fa fa-angle-left'></span>",
                "<span class='fa fa-angle-right'></span>"
            ],
            autoPlay : false
        });
    }
    if($('.posts-slider.owl-carousel').length > 0) {
        $('.posts-slider.owl-carousel').owlCarousel({
            items : 4,
            itemsDesktop : [1199, 3],
            itemsDesktopSmall : [979, 2],
            itemsTablet: [600, 1],
            itemsMobile : [479, 1],
            slideSpeed : 800,
            mouseDrag: true,
            pagination : false,
            navigation: false,
            autoPlay : true,
            loop: true
        });
    }
    if($('.instagram-section .owl-carousel').length > 0) {
        $('.instagram-section .owl-carousel').owlCarousel({
            items : 6,
            itemsDesktop : [1199, 5],
            itemsDesktopSmall : [979, 5],
            itemsTablet: [600, 2],
            itemsMobile : [479, 2],
            slideSpeed : 800,
            mouseDrag: true,
            pagination : false,
            navigation: false,
            autoPlay : true,
            loop: true
        });
    }
    if($('.twitter-carousel.owl-carousel').length > 0) {
        $('.twitter-carousel.owl-carousel').owlCarousel({
            items : 1,
            itemsDesktop : [1199, 1],
            itemsDesktopSmall : [979, 1],
            itemsTablet: [600, 1],
            itemsMobile : [479, 1],
            slideSpeed : 800,
            mouseDrag: true,
            pagination : true,
            navigation: false,
            autoPlay : false,
        });
    }
    if($('.blog-posts .owl-carousel').length > 0) {
        $('.blog-posts .owl-carousel').owlCarousel({
            items: 3,
            itemsDesktop : [1199, 3],
            itemsDesktopSmall : [979, 2],
            itemsTablet: [600, 1],
            itemsMobile : [479, 1],
            slideSpeed: 800,
            mouseDrag: true,
            pagination: false,
            navigation: true,
            navigationText: [
                "<span class='fa fa-angle-left'></span>",
                "<span class='fa fa-angle-right'></span>"
            ],
            autoPlay: true
        });
    }
    if($('.blog .owl-carousel').length > 0) {
        $('.blog .owl-carousel').owlCarousel({
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [600, 1],
            itemsMobile: [479, 1],
            slideSpeed: 800,
            mouseDrag: true,
            pagination: false,
            navigation: true,
            navigationText: [
                "<span class='fa fa-angle-left'></span>",
                "<span class='fa fa-angle-right'></span>"
            ],
            autoPlay: true
        });
    }
    if($('.testimonials-layout-2 .owl-carousel').length > 0) {
        $('.testimonials-layout-2 .owl-carousel').owlCarousel({
            items: 1,
            itemsDesktop : [1199, 1],
            itemsDesktopSmall : [979, 1],
            itemsTablet: [600, 1],
            itemsMobile : [479, 1],
            slideSpeed: 800,
            mouseDrag: true,
            pagination: false,
            navigation: true,
            navigationText: [
                "<span class='fa fa-angle-left'></span>",
                "<span class='fa fa-angle-right'></span>"
            ],
            autoPlay: true
        });
    }

    // Add Angle Right Icon To Submenu
    $('.nav .dropdown-menu li.dropdown-submenu a.dropdown-toggle').each( function () {
        $(this).append('<i class="fa fa-angle-right"></i>');
    });

    // Add Class Fixed To Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 150) {
            $('.navbar').addClass('navbar-fixed-top slideInDown');
        } else {
            $('.navbar').removeClass('navbar-fixed-top slideInDown');
        }
    });

    // Search Form Show Up
    $('.navbar .navbar-right li.search-link a').on('click', function () {
        $('.searchPopup').addClass('show');
    });
    $('.searchPopup .closeBtn').on('click', function () {
        $('.searchPopup').removeClass('show');
    });

});