// если не работает js, оставит один первый слайд
document.querySelector('.slider__items').classList.remove('slider--nojs');
var ite = document.querySelectorAll('.slider__item');
for (var i = 0; i < ite.length; i++) {
  ite[i].classList.remove('slider--nojs');
}
document.querySelector('.slider__toggles').classList.remove('slider--nojs');

$(document).ready(function() {

	//menu
	$('.menu__toggle--wrap').on('click',function(){
    $(this).find('.menu__toggle').toggleClass('open');
    $('.menu__items').toggleClass('menu__items--block');
  });

	//smoothscroll
	$('.smoothscroll').on('click', function(e){
		e.preventDefault();
		var anchor = $('#smoth');
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top 
		}, 800);
	});

	//magnificPopup
	$('.popup-youtube').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: true,
		items: [
      {
        src: 'https://www.youtube.com/watch?v=SYm04J5iCvo',
        type: 'iframe' // this overrides default type
      },
    ],
	});

	//slider
	$('.owl-carousel').owlCarousel({
		loop: false, 
		margin:10,
		items: 1,
		smartSpeed: 1000,
		dots: true,
		dotsContainer: '.slider__toggles',
	});
	$('.slider__toggle').click(function(){
	 $('.owl-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);  
	});

});