const popUpAvatar = document.querySelector("#popUpAvatar");
const addAvatar = (container) => {
	const input = container.querySelector('.file input');
	const nameFile = container.querySelector('.name-img');
	const avatar = container.querySelector('.user-avatar-lk-img img');
	input.addEventListener('input', (e) => {
		avatar.src = URL.createObjectURL(input.files[0]);
		avatar.previousElementSibling.srcset = URL.createObjectURL(input.files[0])
		avatar.parentElement.nextElementSibling.textContent = '';
		nameFile.innerHTML = input.files[0].name;
	});
}
addAvatar(popUpAvatar);