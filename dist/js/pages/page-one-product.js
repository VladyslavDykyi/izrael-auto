
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
		addSlick();
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
		} else if(elem_nav === 3) {
			$('.product-nav').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				asNavFor: '.product-for',
				focusOnSelect: true,
				arrows: false,
			});
		} else if(elem_nav === 4) {
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
		} else if(elem_nav === 5) {
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

	const product_info_open = document.querySelector('.product-info-open');
	product_info_open.addEventListener('click', () => {
		product_info_open.previousElementSibling.classList.toggle('open');
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
function addSlick() {
	const parents_list = document.querySelectorAll('.comment-content-photo');
	parents_list.forEach(parent => {
		const childrenCount = parent.children.length;
		if (childrenCount > 8) {
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
			console.log(parent)
			$(parent).slick({
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: false,
				prevArrow: '<div class="prevArrow"></div>',
				nextArrow: '<div class="nextArrow"></div>',
				responsive: [
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

	})
}
function refreshSlick() {
	$('.comment-content-photo.slick-initialized').slick('refresh');
}
$('.btn-comment .btn').on('click', () => {
	$('#action-comment').arcticmodal();
});
$('.action-complain').on('click', () => {
	$('#action-complain').arcticmodal();
});
$('.product-description-contact').on('click', () => {
	$('#contact').arcticmodal();
});
$('.product-description-messages').on('click', () => {
	$('#product-description-messages').arcticmodal();
});

bindTabs('.product-comment');

function bindTabs(container) {
	if (typeof container === 'string') {
		container = document.querySelector(container);
	}

	const titles = container.querySelectorAll('.tabs-item');
	const contents = container.querySelectorAll('.product-comment-content');
	for (let i = 0; i < titles.length; i++) {
		const titleEl = titles[i];

		titleEl.addEventListener('click', () => {
			deactivate(titles);
			deactivate(contents);
			setTimeout(refreshSlick,1);
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


