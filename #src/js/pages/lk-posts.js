

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

bindTabs('.main');


function bindTabs(container) {
	if (typeof container === 'string') {
		container = document.querySelector(container);
	}

	const titles = container.querySelectorAll('.main-tab-item');
	const contents = container.querySelectorAll('.tab-content');

	for (let i = 0; i < titles.length; i++) {
		const titleEl = titles[i];

		titleEl.addEventListener('click', () => {
			deactivate(titles);
			deactivate(contents);

			titles[i].classList.add('active');
			contents[i].classList.add('active');
		});
	}

	function deactivate(elements) {
		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			element.classList.remove('active');
		}
	}
}