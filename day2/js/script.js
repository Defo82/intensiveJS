let modal = document.querySelector('.modal'),
	receiveBtn = document.getElementById('receive'),
	close = document.querySelector(".close");

receiveBtn.addEventListener("click", function() {
	modal.style.display = "block"
});

close.addEventListener("click", function() {
	modal.style.display = "none"
});