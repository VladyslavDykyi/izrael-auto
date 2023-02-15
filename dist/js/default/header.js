// скрол для шапки
let scrollPos = window.scrollY;

const header = document.querySelector("header");
const scrollChange = 1;

const add_class_on_scroll = () => header.classList.add("fix");
const remove_class_on_scroll = () => header.classList.remove("fix");

window.addEventListener('scroll', function() {
	scrollPos = window.scrollY;
	if (scrollPos >= scrollChange) {
		add_class_on_scroll()
	} else {
		remove_class_on_scroll()
	}
});
// скрол для шапки

// откритие випадашки еще
openDropMenu();
function openDropMenu() {
	const btn = document.querySelector('.else > .drop-btn');
	const toggleActive = () => {
			btn.classList.toggle('active');
	}
	btn.addEventListener('click', e => {
		e.stopPropagation();
		toggleActive();
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
openDropMenu2();
function openDropMenu2() {
	const btn = document.querySelector('.lang > .drop-btn');
	const toggleActive = () => {
			btn.classList.toggle('active');
	}
	btn.addEventListener('click', e => {
		e.stopPropagation();
		toggleActive();
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
// відкриття випадашки еще кінець
// мобілка язик початок
const container = document.querySelector('.lang-text');
const menu = document.querySelector('.lang-drop-mob');

const toggleActive = () => {
	container.classList.toggle('active');
}
container.addEventListener('click', e => {
	e.stopPropagation();
	toggleActive();
});
document.addEventListener('click', e => {
	let target = e.target;
	let its_menu = target === menu || menu.contains(target);
	let its_btn = target === container;
	let menu_is_active = container.classList.contains('active');

	if (!its_menu && !its_btn && menu_is_active) {
		toggleActive();
	}
});
// мобілка язик кінець
// мобілка burger початок
const burger = document.querySelector('.header-burger button');
const headerMob = document.querySelector('.header-mob');
const body = document.querySelector('body');
const toggleBurgerActive = () => {
	body.classList.toggle('lock');
	headerMob.classList.toggle('active');
}
burger.addEventListener('click', e => {
	e.stopPropagation();
	toggleBurgerActive();
});
document.addEventListener('click', e => {
	let target = e.target;
	let its_menu = target === burger || burger.contains(target);
	let its_btn = target === headerMob;
	let menu_is_active = headerMob.classList.contains('active');

	if (!its_menu && !its_btn && menu_is_active) {
		toggleBurgerActive();
	}
});
// мобілка burger кінець

//чат Ші нижче

// const header = document.querySelector("header");
// const scrollChange = 1;
// scrollHandler()
// function scrollHandler() {
// 	const scrollPos = window.scrollY;
// 	scrollPos >= scrollChange ? header.classList.add("fix") : header.classList.remove("fix");
// };
//
// function openMenu(btnSelector, menuSelector) {
// 	const btn = document.querySelector(btnSelector);
// 	const menu = document.querySelector(menuSelector);
//
// 	const toggleActive = () => {
// 		menu.classList.toggle("active");
// 	};
//
// 	btn.addEventListener("click", (e) => {
// 		e.stopPropagation();
// 		toggleActive();
// 	});
//
// 	document.addEventListener("click", (e) => {
// 		const isBtnClicked = e.target === btn || btn.contains(e.target);
// 		const isMenuActive = menu.classList.contains("active");
//
// 		if (!isBtnClicked && isMenuActive) {
// 			toggleActive();
// 		}
// 	});
// }

// function init() {
// 	openMenu(".else > .drop-btn", ".else > .drop-btn.active");
// 	openMenu(".lang > .drop-btn", ".lang > .drop-btn.active");
//
// 	const container = document.querySelector(".lang-text");
// 	const menu