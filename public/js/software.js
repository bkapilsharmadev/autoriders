/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var SaaSio_Software = {
		init: function() {
			this.Basic.init();  
		},
		Basic: {
			init: function() {
				this.Softpreloader();
				this.BackgroundImage();
				this.Animation();
				this.SoftStickymenu();
				this.SoftSideInner();
				this.SoftMobileMenu();

			},
			Softpreloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#auto-m-preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
				if($('.lightbox-image').length) {
					$('.lightbox-image').fancybox({
						openEffect  : 'fade',
						closeEffect : 'fade',
						helpers : {
							media : {}
						}
					});
				}
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.auto-m-scrollup').fadeIn();
					} else {
						$('.auto-m-scrollup').fadeOut();
					}
				});

				$('.auto-m-scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},
			SoftStickymenu: function (){
				// jQuery(window).on('scroll', function() {
				// 	if (jQuery(window).scrollTop() > 100) {
				// 		jQuery('.auto-m-main-header').addClass('auto-m-sticky-menu')
				// 	} else {
				// 		jQuery('.auto-m-main-header').removeClass('auto-m-sticky-menu')
				// 	}
				// })
				$('.auto-m-main-navigation a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
						if (target.length) {
							$('html, body').animate({
								scrollTop: target.offset().top -70
							}, 1000);
							return false;
						}
					}
				});
			},
			SoftMobileMenu: function (){
				$('.auto-m-open_mobile_menu').on("click", function() {
					$('.auto-m-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.auto-m-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.auto-m-mobile_menu li.dropdown ul').length){
					$('.auto-m-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>');
					$('.auto-m-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$(".dropdown-btn").on("click", function () {
					$(this).toggleClass("toggle-open");
				});
			},
			SoftSideInner: function (){
				$('.auto-m-side-toggle-btn').on("click", function() {
					$('.auto-m-sidebar-inner').toggleClass("wide_side_on");
				});
				$('.auto-m-side-toggle-btn').on('click', function () {
					$('body').toggleClass('body_overlay_on');
				});
			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				}
			},

/* End Of js
================================================*/
}
}
jQuery(document).ready(function (){
	SaaSio_Software.init();
});

})();