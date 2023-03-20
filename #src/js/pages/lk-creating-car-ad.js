function tippyUse() {
	tippy('[data-tippy-content]',
		{
			placement: 'top',
			arrow: true,
			theme: 'light-blueBorder',
			duration: 0,
			delay: [300, 500],
			dynamicTitle: true,
		});
}

tippyUse();

$('.select-no-search').select2({
	minimumResultsForSearch: -1,
	theme: "search",
});
$('.select-search').select2({
	theme: "search",
});
// $('#demo').daterangepicker({
// 	ranges: {
// 		'Today': [moment(), moment()],
// 		'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
// 		'Last 7 Days': [moment().subtract(6, 'days'), moment()],
// 		'Last 30 Days': [moment().subtract(29, 'days'), moment()],
// 		'This Month': [moment().startOf('month'), moment().endOf('month')],
// 		'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
// 	},
// 	"alwaysShowCalendars": true,
// 	"startDate": "03/01/2023",
// 	"endDate": "03/07/2023"
// }, function(start, end, label) {
// 	console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
// });
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
window.addEventListener("DOMContentLoaded", function () {
	function fileFields(inp) {
		const avatar = document.querySelectorAll(inp);
		for (let i = 0; i < avatar.length; i++) {
			avatar[i].addEventListener('input', function() {
				let reader = new FileReader();
				reader.onload = function (e) {
					avatar[i].parentElement.nextElementSibling.lastElementChild.setAttribute('src', e.target.result);
					avatar[i].parentElement.nextElementSibling.firstElementChild.srcset = e.target.result;
					avatar[i].parentElement.previousElementSibling.value = e.target.result;
				}
				reader.readAsDataURL(this.files[0]);
				avatar[i].parentElement.nextElementSibling.lastElementChild.classList.add('active');
				avatar[i].parentElement.classList.add('none');
				avatar[i].parentElement.parentElement.classList.add('active');
				deleteFile(avatar[i].parentElement.nextElementSibling.nextElementSibling.firstElementChild);
			});
		}
		function deleteFile(button) {
			button.addEventListener('click', () => {
				button.parentElement.previousElementSibling.firstElementChild.srcset = '';
				button.parentElement.previousElementSibling.lastElementChild.src = '';
				button.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.value = '';
				button.parentElement.previousElementSibling.previousElementSibling.classList.remove('none');
				button.parentElement.previousElementSibling.lastElementChild.classList.remove('active');
				button.parentElement.parentElement.classList.remove('active');
			});
		}
	}
	fileFields('.file-inp');
});