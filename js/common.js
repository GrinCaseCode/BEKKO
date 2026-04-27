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

	//select catalog	
$(".item-select__value").click(function() {
	$(".item-select__dropdown").slideUp(200);
	$(".item-select__value").removeClass("active");
	if ($(this).siblings(".item-select__dropdown").is(":hidden")) {
		$(this).siblings(".item-select__dropdown").slideDown(200);
		$(this).addClass("active");
	} else {
		$(this).siblings(".item-select__dropdown").slideUp(200);
		$(this).removeClass("active");
	}
});

$(document).mouseup(function (e) {
    var container = $(".item-select");
    if (container.has(e.target).length === 0){
		$(".item-select__dropdown").slideUp(200);
		$(".item-select__value").removeClass("active");
    }
  });

  	jQuery('.quantity').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

  /*range slider*/

	$('.input-range').each(function () {
		var $range = $(this).find(".range-controls__slider"),
			$from_input = $(this).find(".input-range__from"),
			$to_input = $(this).find(".input-range__to"),
			from = +$range.attr("from"),
			to = +$range.attr("to"),
			min = +$range.attr("min"),
			max = +$range.attr("max");

		function formatNumber(num) {
			return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		}

		function cleanNumber(str) {
			return str.replace(/\s+/g, '');
		}

		$range.ionRangeSlider({
			type: "double",
			min: min,
			max: max,
			from: from,
			to: to,
			postfix: " Р",
			prettify_enabled: true,
			onChange: function () {
				updateValues();
			}
		});

		$range = $range.data("ionRangeSlider");

		var updateValues = function () {
			var res = $range.result;
			$from_input.val(formatNumber(res.from));
			$to_input.val(formatNumber(res.to));
		};

		$from_input
			.on("focus", function () {
				this.value = cleanNumber(this.value);
				this.selectionStart = this.value.length;
			})
			.on("input", function () {
				var val = cleanNumber(this.value);
				$range.update({ from: val });
			})
			.on("blur", updateValues);

		$to_input
			.on("focus", function () {
				this.value = cleanNumber(this.value);
				this.selectionStart = this.value.length;
			})
			.on("input", function () {
				var val = cleanNumber(this.value);
				$range.update({ to: val });
			})
			.on("blur", updateValues);

		updateValues();
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

		$('.tabs li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
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

		 // стайлер для select
	 $('select').styler();

	$(".input-phone").mask("+7 (999) 999-99-99");

	//Попап менеджер FancyBox
	 $(".fancybox").fancybox({
        autoFocus: false,
        backFocus: false,
        closeExisting: true,
        touch: false
    });

});


