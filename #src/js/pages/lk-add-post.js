$('.select-no-search').select2({
	minimumResultsForSearch: -1,
	theme: "search",
});
$('.select-search').select2({
	theme: "search",
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