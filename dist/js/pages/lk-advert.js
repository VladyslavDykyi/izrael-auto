

$('.delete-advert').on('click', () => {
	$('#delete-advert').arcticmodal();
});
$('.removeFromPublication').on('click', () => {
	$('#removeFromPublication').arcticmodal();
});
$('.graphics').on('click', () => {
	$('#graphics').arcticmodal();
});
const ctx = document.getElementById('myChart');

new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['28.02.2023', '01.03.2023', '02.03.2023', '03.03.2023', '04.03.2023', '06.03.2023',],
		datasets: [{
			label: 'Количество просмотров',
			data: [12, 19, 3, 5, 21, 3],
			borderWidth: 0,
			backgroundColor: '#2AA3DE',
		},
		{
			label: 'Количество лайков',
			data: [12, 1, 4, 5, 3, 31],
			borderWidth: 0,
			backgroundColor: '#fd7676',
		}
		]
	},
	options: {
		legend: {
			display: false,
		},
		scales: {
			y: {
				beginAtZero: true
			}
		}
	}
});
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
console.log(window)