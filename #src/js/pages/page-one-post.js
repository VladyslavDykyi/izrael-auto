$('.btn-comment .btn').on('click', () => {
	$('#action-comment').arcticmodal();
});
$('.action-complain').on('click', () => {
	$('#action-complain').arcticmodal();
});
$('.product-description-messages').on('click', () => {
	$('#product-description-messages').arcticmodal();
});

const commentList = document.querySelector('.product-comment-content');
commentList.addEventListener('click', (event) => {
	event.stopPropagation();
	if (!event.target.classList.contains('comment-content-btn')) return;
	$('#action-comment').arcticmodal();
});