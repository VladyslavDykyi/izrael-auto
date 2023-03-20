$(window).on('load', function() {
$(document).ready(function () {
	$('.inspection-up-to').daterangepicker({
		"singleDatePicker": true,
		"minYear": 2023,
		"alwaysShowCalendars": true,
		"startDate": "03/01/2023",
		"endDate": "03/07/2023",
		"minDate": "03/07/2023"
	}, function (start, end, label) {
		console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
	});
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
});
if (window.innerWidth <= 768) {
	$(document).ready(function () {
		$('.adverts-item-mob .adverts-item-img-slider').slick({
			centerMode: true,
			// centerPaging: '50px',
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
			arrows: false,
			variableWidth: true,
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
const arrayElementForm = document.querySelectorAll('.main-inputs');
const btnToggleForm = document.querySelector('.main-btn-toggle');

btnToggleForm.addEventListener('click',() => {
	btnToggleForm.classList.toggle('active');
	for (let i = 3; i < arrayElementForm.length; i++) {
		arrayElementForm[i].classList.toggle('active');
	}
});
});

// $('.select-without-searching').select2({
// 	minimumResultsForSearch: -1,
// 	theme: "my",
// });
// $('.select-search').select2({
// 	theme: "search",
// });
// $('.select-no-search').select2({
// 	minimumResultsForSearch: -1,
// 	theme: "search",
// });






