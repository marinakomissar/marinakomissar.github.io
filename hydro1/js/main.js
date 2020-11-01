$(function(){
    $('.banner-section_slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section_slider-btn banner-section_slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section_slider-btn banner-section_slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 969,
                settings: {
                arrows: false
              }
            }
        ]
    });

    $('.tab').on('click', function(e){
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs_wrapper').siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

        $('.product-slider').slick('setPosition');
    });


    $('.product-item_favorite').on('click', function(){
        $(this).toggleClass('product-item_favorite--active');
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider_slider-btn product-slider_slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider_slider-btn product-slider_slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                arrows: false,
                dots: true
              }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    dots: true
              }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    dots: true
              }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    dots: true
              }
            }
        ]
    });

    $('.menu_btn').on('click', function(){
        $('.menu_mobile-list').toggleClass('menu-mobile_list--active')
    });
    
    $('.footer_topdrop').on('click', function(){
        $(this).next().slideToggle();
        $(this).next().toggleClass('footer_topdrop--active');
    });

    $('.aside_btn').on('click', function(){
        $(this).next().slideToggle();
    });

    $('.filter_style').styler();

    $('.filter_item-drop, .filter-extra').on('click', function(){
        $(this).toggleClass('filter_item-drop--active');
        $(this).next().slideToggle('200');
    });

    $(".js-range-slider").ionRangeSlider({
        grid: false,
        type: "double",
        min: 100000,
        max: 500000
    });

    $('.catalog_filter-btngrid').on('click', function(){
        $(this).addClass('catalog_filter-button--active');
        $('.catalog_filter-btnline').removeClass('catalog_filter-button--active');
        $('.product-item_wrapper').removeClass('product-item_wrapper--list');
    });

    $('.catalog_filter-btnline').on('click', function(){
        $(this).addClass('catalog_filter-button--active');
        $('.catalog_filter-btngrid').removeClass('catalog_filter-button--active');
        $('.product-item_wrapper').addClass('product-item_wrapper--list');
    });

    $(".rate-yo").rateYo({
        normalFill: "#C4C4C4",
        ratedFill: "#1C62CD",
        spacing: "7px"
      });
});