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