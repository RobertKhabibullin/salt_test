$(document).ready(function() {

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

});

//menu

var navHead = document.querySelector('.menu');
var navMain = document.querySelector('.menu__wrap');
var navToggle = document.querySelector('.menu__toggle');

navHead.classList.remove('menu--nojs');
navMain.classList.remove('menu--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('menu--closed')) {
		navMain.classList.remove('menu--closed');
		navMain.classList.add('menu--opened');
	} else {
		navMain.classList.add('menu--closed');
		navMain.classList.remove('menu--opened');
	}
});

// slider

document.querySelector('.slider__items').classList.remove('slider--nojs');
document.querySelector('.slider__item').classList.remove('slider--nojs');
document.querySelector('.slider__toggles').classList.remove('slider--nojs');

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlides(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slider__item");
	var toggles = document.getElementsByClassName("slider__toggle");

	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (i = 0; i < toggles.length; i++) {
		toggles[i].className = toggles[i].className.replace("slider__toggle--active", "");
	}

	slides[slideIndex - 1].style.display = "flex";
	toggles[slideIndex - 1].className += "slider__toggle--active";
}


