const avatar = document.querySelector('.user-avatar-lk-btn input');
const img = document.querySelector('.user-avatar-lk-img img');
avatar.addEventListener('input', (e) => {
	img.src = URL.createObjectURL(avatar.files[0]);
	img.previousElementSibling.srcset = URL.createObjectURL(avatar.files[0]);
	img.parentElement.nextElementSibling.textContent = '';
	setTimeout(()=> {
		img.parentElement.parentElement.nextElementSibling.submit();
	},2000);
});