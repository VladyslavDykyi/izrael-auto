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
});
const arrayElementForm = document.querySelectorAll('.main-inputs');
const btnToggleForm = document.querySelector('.main-btn-toggle');

btnToggleForm.addEventListener('click',() => {
	btnToggleForm.classList.toggle('active');
	for (let i = 3; i < arrayElementForm.length; i++) {
		arrayElementForm[i].classList.toggle('active');
	}
});
});
$('.all-city-btn').on('click', () => {
	$('#all-city-popUp').arcticmodal();
});