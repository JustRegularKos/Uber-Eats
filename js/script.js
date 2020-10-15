/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}
// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

//Кнопка прокрутки вверх
var goBackArrow = document.querySelector(".back-to-top");

window.addEventListener('scroll', trackScroll);
goBackArrow.addEventListener('click', goBackArrow);

function trackScroll() {
	var scrolled = window.pageYOffset;
	var coords = document.documentElement.clientHeight;

	if (scrolled > coords) {
		goBackArrow.classList.add('back-to-top-show');
	}
	if (scrolled < coords) {
		goBackArrow.classList.remove('back-to-top-show');
	}
}

function backToTop() {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -30);
		setTimeout(backToTop, 0);
	}
}

/*(function () {
	'use strict';

	function trackScroll() {
		var scrolled = window.pageYOffset;
		var coords = document.documentElement.clientHeight;

		if (scrolled > coords) {
			goBackArrow.classList.add('back-to-top-show');
		}
		if (scrolled < coords) {
			goBackArrow.classList.remove('back-to-top-show');
		}
	}

	function backToTop() {
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -80);
			setTimeout(backToTop, 0);
		}
	}

	var goBackArrow = document.querySelector('.back-to-top');

	window.addEventListener('scroll', trackScroll);
	goBackArrow.addEventListener('click', backToTop);
})();*/
