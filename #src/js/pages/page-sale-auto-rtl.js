$(window).on('load', function() {
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
		rtl: true,
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
	if (window.innerWidth <= 768) {
		$(document).ready(function () {
			$('.adverts-item-mob .adverts-item-img-slider').slick({
				centerMode: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				arrows: false,
				variableWidth: true,
				rtl: true,
				responsive: [
					{
						breakpoint: 680,
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
						breakpoint: 420,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		});
	}
});