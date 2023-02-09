let scrollPos = window.scrollY;

const header = document.querySelector("header");
const scrollChange = 1;

const add_class_on_scroll = () => header.classList.add("fix");
const remove_class_on_scroll = () => header.classList.remove("fix");

window.addEventListener('scroll', function() {
	scrollPos = window.scrollY;
	if (scrollPos >= scrollChange) { add_class_on_scroll() }
	else { remove_class_on_scroll() }
});


////////////////////


// function openDropMenu(container) {
// 	container =  document.querySelector(container);
// 	const btn = container.querySelector('.drop-btn');
//
// 	btn.addEventListener('click', e => {
// 		e.target.classList.toggle('active')
// 	});
// }

///
openDropMenu('.lang');
openDropMenu('.else');
function openDropMenu(elem) {
	const container = document.querySelector(elem);
	const btn = container.querySelector('.drop-btn');

	const toggleActive = () => {
			btn.classList.toggle('active');
	}
	btn.addEventListener('click', e => {
		e.stopPropagation();
		let a = document.querySelector('.else');
		let b = document.querySelector('.lang');

		toggleActive();
		if (b.firstElementChild.classList.contains('active')) {

			a.firstElementChild.classList.remove('active');

		} else if(a.firstElementChild.classList.contains('active')) {

			b.firstElementChild.classList.remove('active');

		}



	});

	document.addEventListener('click', e => {
		let target = e.target;
		let its_menu = target === btn || btn.contains(target);
		let its_btn = target === btn;
		let menu_is_active = btn.classList.contains('active');

		if (!its_menu && !its_btn && menu_is_active) {
			toggleActive();
		}
	});
}