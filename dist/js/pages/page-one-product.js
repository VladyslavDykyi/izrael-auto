const product_info_open = document.querySelector('.product-info-open');
product_info_open.addEventListener('click', () => {
	product_info_open.previousElementSibling.classList.toggle('open');
});

function fileFields(inp) {
	const avatar = document.querySelectorAll(inp);
	for (let i = 0; i < avatar.length; i++) {
		avatar[i].addEventListener('input', function () {
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
			setTimeout(refreshSlick, 1);
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


