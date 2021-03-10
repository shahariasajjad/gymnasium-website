$(function () {
      // Slick slider
      $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
      });
      // Venobox js
      $('.venobox').venobox();
      // test slide
      $('.test_slide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      // Team slide
      $('.team_row').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 3000,
          dots: false,
          arrows: false,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
          });
        //counter js

        $('.counter').counterUp({
          delay: 10,
          time: 2000
        });

        // img_slide js

        $('.autoplay').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 1000,
          prevArrow: false,
          nextArrow: false,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
        });

        var navOff = $('.main_menu').offset().top;

        $(window).scroll(function () {

          var scrolling = $(this).scrollTop();

          if (scrolling > navOff) {
            $('.main_menu').addClass('menu_fix');
          } else {
            $('.main_menu').removeClass('menu_fix');
          }

        });

        $(window).scroll(function () {

          var scrolling = $(this).scrollTop();

          if (scrolling > 700) {
            $('.backtotop').fadeIn();
          } else {
            $('.backtotop').fadeOut();
          }



        });

        $('.backtotop').click(function () {
          $('html,body').animate({
            scrollTop: 0,
          }, 2000);
        });
      });