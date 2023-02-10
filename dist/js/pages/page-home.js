

$(document).ready(function(){
	$('.slider-car').slick({
		centerMode: true,
		centerPaging: '50px',
		slidesToShow: 10,
		slidesToScroll: 1,
		infinite: true,
		dots: false,
		arrows: false,
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
	}).on('wheel', (function(e) {
		e.preventDefault();
		if (e.originalEvent.deltaY < 0) {
			$(this).slick('slickNext');
		} else {
			$(this).slick('slickPrev');
		}
	}));
});
if(window.innerWidth <= 768) {
	$('.slider1').slick({
		centerMode: true,
		centerPaging: '50px',
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		dotsClass: "my-dots-bot",
		arrows: false,
		responsive: [
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
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
	$('.slider2').slick({
		centerMode: true,
		centerPaging: '50px',
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		dotsClass: "my-dots-bot",
		arrows: false,
		responsive: [
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.slider3').slick({
		centerMode: true,
		centerPaging: '50px',
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		dots: false,
		arrows: false,
		responsive: [
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
}
