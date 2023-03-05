const input = document.querySelector('.input-file input');
const fileName = document.querySelector('.file-name');
input.addEventListener('input',handleFiles,false);

function handleFiles() {
	const fileList = this.files;
	let i = 0;
	for (; i < fileList.length; i++) {
		const item = document.createElement('li');
		item.classList.add('t-regular','t-4','s');
		item.textContent = `${fileList[i].name}`;
		fileName.append(item);
	}
}