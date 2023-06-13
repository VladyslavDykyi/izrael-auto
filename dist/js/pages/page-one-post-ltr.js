$(document).ready(function () {
	$('.product-for').slick({
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: false,
		asNavFor: '.product-nav',
	});
	const elem_nav = $('.product-nav-item').length
	if (elem_nav === 2) {
		$('.product-nav').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			asNavFor: '.product-for',
			focusOnSelect: true,
			arrows: false,
		});
	} else if (elem_nav === 3) {
		$('.product-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.product-for',
			focusOnSelect: true,
			arrows: false,
		});
	} else if (elem_nav === 4) {
		$('.product-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.product-for',
			focusOnSelect: true,
			arrows: false,
			responsive: [
				{
					breakpoint: 425,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
			]
		});
	} else if (elem_nav === 5) {
		$('.product-nav').slick({
			slidesToShow: 5,
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
	} else {
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
	}
});