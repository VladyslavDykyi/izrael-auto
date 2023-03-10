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
	[].forEach.call(document.querySelectorAll('.tel'), function (input) {
		function mask(event) {
			let keyCode;
			event.keyCode && (keyCode = event.keyCode);
			let pos = this.selectionStart;
			if (pos < 1) event.preventDefault();
			let matrix = "+(___) _________",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a
				});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 1 && (i = 2);
				new_value = new_value.slice(0, i);
			}
			let reg = matrix.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
			if (event.type == "blur" && this.value.length < 5) this.value = "";
		}
		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false)
	});
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