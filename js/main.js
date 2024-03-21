// 
// ========================= burger =========================
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__block-nav');
let liHeader = document.querySelectorAll('.header__menu-item');

burger.addEventListener('click', rotateBurger); 

for(let i = 0; i < liHeader.length; i++ ) {
	if (window.innerWidth < 990 ) {
		liHeader[i].addEventListener('click', rotateBurger);
	}
}

function rotateBurger() { 
  burger.classList.toggle('burger-active');

  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}
// ========================= burger-foot =========================
let burgerFoot = document.querySelector('.burger-foot');
let navFoot = document.querySelector('.footer__nav');
let liHeaderFoot = document.querySelectorAll('.footer__menu-item');

burgerFoot.addEventListener('click', rotateBurgerFoot); 

for(let i = 0; i < liHeaderFoot.length; i++ ) {
	if (window.innerWidth < 768 ) {
		liHeaderFoot[i].addEventListener('click', rotateBurgerFoot);
	}
}

function rotateBurgerFoot() { 
	burgerFoot.classList.toggle('burger-foot-active');

  if (navFoot.style.display === "flex") {
    navFoot.style.display = "none";
  } else {
    navFoot.style.display = "flex";
  }
}

// ============== video =============
const wrapperVideo = document.querySelector('.video__box');
const video = document.querySelector('.video__box-item');

video.addEventListener('click',function() {
	wrapperVideo.classList.remove("video__box--toggle");
});
// ============== video /=============

// ========= slyder slick ==========
$('.slyder__box').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	infinite: true,
	arrow: true,
	// dots: true,
	adaptiveHeight: true,
	responsive: [
		{
		  breakpoint: 768,
		  settings: {
			 slidesToShow: 2,
			 slidesToScroll: 1,
		  }
		},
	 ]
 });

// ========= slyd2 slick ==========
$('.slyd2__box').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	infinite: true,
	arrow: true,
	// dots: true,
	adaptiveHeight: true,
	responsive: [
		{
		  breakpoint: 768,
		  settings: {
			 slidesToShow: 1,
			 slidesToScroll: 1,
		  }
		},
	 ]
 });

 // ======== swiper ========

// const swiper = new Swiper('.swiper', {
// 	// Optional parameters
// 	autoplay: 500,
// 	slidesPerView: 2.8,
// 	spaceBetween: 100,
// 	centeredSlides: true, 
// 	loop: true,
// 	// If we need pagination
// 	pagination: {
// 	el: '.swiper-pagination',
// 	},
// 	// Navigation arrows
// 	navigation: {
// 	  nextEl: '.swiper-button-next',
// 	  prevEl: '.swiper-button-prev',
// 	},

// });
// ======== swiper / ========

// отправка формы =============>
// $(document).ready(function() {

// 	//E-mail Ajax Send
// 	$("form").submit(function() { //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php", //Change
// 			data: th.serialize()
// 		}).done(function() {
// 			alert("Спасибо. Ваша заявка была отправлена.");
// 			setTimeout(function() {
// 				// Done Functions
// 				th.trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

// });
// ============================

new WOW().init();