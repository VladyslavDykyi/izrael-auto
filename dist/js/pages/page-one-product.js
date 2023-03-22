$(window).on('load', function() {
	$(document).ready(function () {
		$('.slider-car').slick({
			centerMode: true,
			centerPaging: '50px',
			slidesToShow: 10,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
			arrows: true,
			prevArrow: '<div class="prevArrow"></div>',
			nextArrow: '<div class="nextArrow"></div>',
			responsive: [
				{
					breakpoint: 1920,
					settings: {
						slidesToShow: 8,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 1680,
					settings: {
						slidesToShow: 6,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 1440,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 580,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
		/*--- слайдер на карточке товара ---*/
		$('.product-for').slick({
			autoplay: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			fade: false,
			asNavFor: '.product-nav',
		});
		$('.product-nav').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			asNavFor: '.product-for',
			focusOnSelect: true,
			arrows: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 425,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
			]
		});
	});
});