
// скрол для шапки
if (window.innerWidth >= 1024) {
// откритие випадашки еще
	openDropMenu();

	function openDropMenu() {
		const btn = document.querySelector('.else > .drop-btn');
		const btn2 = document.querySelector('.lang > .drop-btn');
		const btn3 = document.querySelector('.header-buttons-user > .drop-btn');
		const toggleActive = () => {
			btn2.classList.remove('active');
			btn3.classList.remove('active');
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
		const btn2 = document.querySelector('.else > .drop-btn');
		const btn3 = document.querySelector('.header-buttons-user > .drop-btn');
		const toggleActive = () => {
			btn2.classList.remove('active');
			btn3.classList.remove('active');
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

	openDropMenu3();

	function openDropMenu3() {
		const btn = document.querySelector('.header-buttons-user > .drop-btn');
		const btn2 = document.querySelector('.lang > .drop-btn');
		const btn3 = document.querySelector('.else > .drop-btn');
		const toggleActive = () => {
			btn2.classList.remove('active');
			btn3.classList.remove('active');
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
}
// відкриття випадашки еще кінець
if (window.innerWidth <= 1024) {
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
		let its_menu = target === headerMob || headerMob.contains(target);
		let its_btn = target === burger;
		let menu_is_active = headerMob.classList.contains('active');

		if (!its_menu && !its_btn && menu_is_active) {
			toggleBurgerActive();
		}
	});
// мобілка burger кінець
}

openDropMenu4();

function openDropMenu4() {
	const btn = document.querySelector('.head-lk-nav-container > button');
	const menu = document.querySelector('.head-lk-nav');
	const toggleActive = () => {
		menu.classList.toggle('active');
		btn.classList.toggle('active');
	}
	btn.addEventListener('click', e => {
		e.stopPropagation();
		toggleActive();
	});
	document.addEventListener('click', e => {
		let target = e.target;
		let its_menu = target === menu || menu.contains(target);
		let its_btn = target === btn;
		let menu_is_active = menu.classList.contains('active');
		if (!its_menu && !its_btn && menu_is_active) {
			toggleActive();
		}
	});
}
$('#popUp-support').on('click', () => {
	$('#popUpSupport').arcticmodal();
});
$('#popUpSupport-btn').on('click', e => {
	e.preventDefault();
	$('#popUpSupport-thank').arcticmodal();
	$('#popUpSupport').off('submit');
	$('#popUpSupport .arcticmodal-close').click();
	setTimeout(() => {
		$('#popUpSupport form').submit();
		$('#popUpSupport-thank').arcticmodal('close');
	}, 2000);
});
