document.addEventListener('DOMContentLoaded', function(){

    $('.carousel__inner').slick({
        prevArrow:'<button type="button" class="slick-prev"><img src="img/slick-prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slick-next.png"></button>',
        speed: 300,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                },
            }
        ]
    });
    
    if (document.documentElement.clientWidth < 768) {
        let slickDots = document.querySelectorAll('.slick-dots > li > button');
        let slides = document.querySelectorAll('.slick-slide[role="tabpanel"]');
        let slickTrack = document.querySelector('.slick-track');
    
        function activeDot (index) {
            slickDots.forEach(dot => {
                dot.classList.remove('dot__active');
                dot.innerHTML = '';
            }) 
            slickDots[index].classList.add('dot__active');
        }
    
        slickTrack.addEventListener('touchend', () => {
                setTimeout(() => {
                    slides.forEach((slide, i) => {
                        if (slide.classList.contains('slick-active')){
                            activeDot(i);
                        }
                    })
                }, 300);
        })
    
        slickDots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                activeDot(i);
            })
        })
    
        activeDot(0);
    }

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    // function toggleSlide(item) {
    //     $(item).each(function(i) {
    //         $(this).on('click', function(e) {
    //             e.preventDefault();
    //             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //         })
    //     });
    // };

    function toggleSlide(item){
        document.querySelectorAll(item).forEach((link, i) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelectorAll('.catalog-item__content')[i].classList.toggle('catalog-item__content_active')
                document.querySelectorAll('.catalog-item__list')[i].classList.toggle('catalog-item__list_active')
            })
        })
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });


    
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    $(window).scroll(function() {

        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    new WOW().init();
})