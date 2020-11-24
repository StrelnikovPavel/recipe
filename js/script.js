


function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();

$(function () {
	$('.icon-menu').click(function (event) {
		$('.aside, .icon-menu').toggleClass('active');
	});
});

$(function () {
	$('.menu__brg').click(function (event) {
		$('.menu__brg, .bottom-header_content').toggleClass('active');
	});
});

$(function () {
	$('#header__search-item').click(function (event) {
		$('.header__input').toggleClass('_active');
	});
});



$(document).ready(function () {
	$('.tabs__item').click(function (e) {
		e.preventDefault();

		$('.tabs__item').removeClass('tabs__item-active');
		$('.tabs__block').removeClass('tabs__block-active');

		$(this).addClass('tabs__item-active');
		$($(this).attr('href')).addClass('tabs__block-active');
	});
	$('.tabs__item:first').click();
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.aside__content, .icon-menu')) {
		let langMenu = document.querySelector('.aside');
		langMenu.classList.remove('active');
	}
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.aside__content, .icon-menu')) {
		let langMenu = document.querySelector('.icon-menu');
		langMenu.classList.remove('active');
	}
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.header__search')) {
		let langMenu = document.querySelector('.header__input');
		langMenu.classList.remove('_active');
	}
});
