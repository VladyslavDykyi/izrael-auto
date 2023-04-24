
if (window.innerWidth >= 680) {
	const btn_settings = document.querySelectorAll('.btn-action');

	btn_settings.forEach(e => {

		e.addEventListener('click', () => {
			e.classList.toggle('active');
			e.parentElement.nextElementSibling.classList.toggle('active');
		});
	});
}
if (window.innerWidth <= 680) {
	const mob_btn_settings = document.querySelectorAll('.mob-btn-action');
	mob_btn_settings.forEach(e => {
		e.addEventListener('click', () => {
			e.classList.toggle('active');
			e.parentElement.nextElementSibling.classList.toggle('active');
		});
	});
}