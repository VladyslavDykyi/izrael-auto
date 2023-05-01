
function addSlickLtr() {
	const parents_list = document.querySelectorAll('.comment-content-photo');
	parents_list.forEach(parent => {
		const childrenCount = parent.children.length;
		if (window.innerWidth >= 550 && childrenCount > 8) {
			$(parent).slick({
				infinite: false,
				slidesToShow: 8,
				slidesToScroll: 1,
				dots: false,
				prevArrow: '<div class="prevArrow"></div>',
				nextArrow: '<div class="nextArrow"></div>',
				responsive: [
					{
						breakpoint: 1120,
						settings: {
							slidesToShow: 6,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 920,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 810,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 6,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 650,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 550,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 450,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
				]
			});
		}
		if (window.innerWidth <= 550 && childrenCount > 3) {
			$(parent).slick({
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: false,
				prevArrow: '<div class="prevArrow"></div>',
				nextArrow: '<div class="nextArrow"></div>',
				responsive: [
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
				]
			});
		}
	});
}

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
	addSlickLtr();
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

