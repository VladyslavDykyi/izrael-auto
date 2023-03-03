const input = document.querySelector('.input-file input');
const fileName = document.querySelector('.file-name');
input.addEventListener('input',handleFiles,false);

function handleFiles() {
	const fileList = this.files;
	let i = 0
	for (; i < fileList.length; i++) {
		const item = document.createElement('li');
		item.classList.add('t-regular','t-4','s');
		item.textContent = `${fileList[i].name}`;
		fileName.append(item);
	}
}
// const input2 = document.querySelector('.input-message textarea');
// const ewqeq = document.querySelector('.message-my');
// input2.addEventListener('input',()=> {
// 	ewqeq.innerHTML = input2.value.replace(/\n/g,'<br/>');
// 	console.log(input2.value.replace(/\n/g,'<br/>'));
// });
