$(document).ready(function(){

	if($(window).scrollTop() > 70)  $('.menu').addClass('scroll');

	$(window).scroll(function () {
		let scrollPos = $(this).scrollTop();
		$(window).scrollTop() > 70 ? $('.menu').addClass('scroll').fadeIn('slow') : $('.menu').removeClass('scroll').fadeIn('slow');
		
		$('.parallax').css({
			'background-position-y': `${scrollPos/15}%`
		});
	});

	$('nav').click(function (e) { 
		//e.preventDefault();
		let target = e.target;
		if(target.tagName == 'A'){
			let id = target.getAttribute('href'),
				top = $(id).offset().top;
			$('html').animate({scrollTop: top-68}, 500);
		}else if(target.className == 'menu-burger' || target.tagName == 'SPAN'){
			$('.menu-wrapper').toggleClass('open');
		}
	});
});