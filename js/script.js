import animateCounter from './animate-counter.js';

$(document).ready(function(){
	const counterBlock = document.querySelectorAll('.counter-content__number');
	let flagCheck = true;

	if($(window).scrollTop() > 70) $('.menu').addClass('scroll');//приклеивание меню, при загрузке страницы

	$(window).scroll(function () {
		let scrollPos = $(this).scrollTop();
		//запуск анимации счетчика
		if(counterBlock[0].getBoundingClientRect().top < counterBlock[0].scrollTop + window.innerHeight && flagCheck){
		 counterBlock.forEach(block=> animateCounter(block,4));
		 flagCheck= false;
		}
		//приклеивание меню
		$(window).scrollTop() > 70 ? $('.menu').addClass('scroll').fadeIn('slow') : $('.menu').removeClass('scroll').fadeIn('slow');
		
		//параллакс
		$('.parallax').css({
			'background-position-y': `${scrollPos/15}%`
		});
	});

	$('nav').click(function (e) { 
		//e.preventDefault();
		let target = e.target;
		if(target.tagName == 'A'){
			let id = target.getAttribute('href'),
				top = $(id).offset().top;// отступ от края страницы
			$('html').animate({scrollTop: top-68}, 500);//анимация скролла к ид
		}else if(target.className == 'menu-burger' || target.tagName == 'SPAN'){//открытие меню
			$('.menu-wrapper').toggleClass('open');
		}
	});
});