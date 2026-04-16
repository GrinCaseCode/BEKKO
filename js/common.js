$(document).ready(function () {

		//кнопка sandwich
	$(".sandwich").click(function () {
		if ($(".sidebar").is(":hidden")) {
			$(".sidebar").slideDown(200);
			$(".sandwich").addClass("active");
			$("body").addClass("no-scroll");
			$(".menu-overlay").fadeIn(200);
		} else {
			$(".sidebar").slideUp(200);
			$(".sandwich").removeClass("active");
			$("body").removeClass("no-scroll");
			$(".menu-overlay").fadeOut(200);
		}
	});

	$(".menu-overlay").click(function () {
		$(".sidebar").slideUp(200);
		$(".sandwich").removeClass("active");
		$("body").removeClass("no-scroll");
		$(".menu-overlay").fadeOut(200);
	});

	$(".open-search").click(function () {
		$(".search-main").slideToggle(200);
		$(".search-overlay").fadeToggle(200);
		$(".open-search").toggleClass("active");
		$("body").toggleClass("no-scroll");
	});

	$(".search-overlay").click(function () {
		$(".search-main").slideUp(200);
		$(".search-overlay").fadeOut(200);
		$(".open-search").removeClass("active");
		$("body").removeClass("no-scroll");
	});

	{
		if ($(window).width() < 992) {
			$(".item-accordion__head").click(function () {
				$(this).parent().siblings().removeClass("active");
				$(this).parent().siblings().find(".item-accordion__content").slideUp(200);
				$(this).siblings(".item-accordion__content").slideToggle(200);
				$(this).parent().toggleClass("active");
			});


		}
	}
	{
		if ($(window).width() > 992) {
			$(".item-accordion__head").mouseover(function () {
				$(this).parents(".item-accordion").siblings().removeClass("active");
				$(this).parent().addClass("active");
			});
		}
	}

	/*input file*/
	$("input[type='file']").change(function () {
		var filename_text = $(this).parent().siblings(".name-upload");
		var filename = $(this).val().replace(/.*\\/, "");
		filename_text.html(filename);
	});

	$(".btn-favorite").click(function () {
			$(this).toggleClass("active");
	});

	//кнопка sandwich
	$(".menu__arrow").click(function () {
			$(this).parent().siblings().find(".menu__dropdown").slideUp(200);
			$(this).parent().siblings().removeClass("active");
		if ($(this).siblings(".menu__dropdown").is(":hidden")) {
			$(this).siblings(".menu__dropdown").slideDown(200);
			$(this).parent().addClass("active");
		} else {
			$(this).siblings(".menu__dropdown").slideUp(200);
			$(this).parent().removeClass("active");
		}
	});

	//contacts tabs
	$('.contacts__main-tab').not(':first').hide();
	$('.pin--1').addClass('active');

	$('.pin').on('click', function () {
		const tabId = $(this).data('tab');

		$('.pin').removeClass('active');
		$(this).addClass('active');

		$('.contacts__main-tab').hide();
		$(`.contacts__main-tab[data-tab="${tabId}"]`).fadeIn(200);
	});

	//слайдер

	$('.slider-catalog').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-arrow-left"></i></div>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-arrow-right"></i></div>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
					arrows: false,
					dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
					arrows: false,
					dots: true
                }
            }
        ]
    });

	$('.slider-partners').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-arrow-left"></i></div>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-arrow-right"></i></div>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
					arrows: false,
					dots: true
                }
            }
        ]
    });

	$(".input-phone").mask("+7 (999) 999-99-99");

	//Попап менеджер FancyBox
	 $(".fancybox").fancybox({
        autoFocus: false,
        backFocus: false,
        closeExisting: true,
        touch: false
    });

});


