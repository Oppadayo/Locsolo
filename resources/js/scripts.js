$(document).ready(function(){
	/*STICKY NAV*/
	$('.js--section-equipamentos').waypoint(function(direction){
		if(direction == "down"){
			$('nav').addClass('sticky')
		}
		else{
			$('nav').removeClass('sticky');
		}
		}, {
 			 offset: '65px;'
	});		

	/*SCROOL BUTTONS*/
	$('.js--scrool-to-equipamentos').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-equipamentos').offset().top}, 1000);
	});
	

	/*ANiMATION ON SCROOL*/
	$('.js--wp-1').waypoint(function(direction){
		$('.js--wp-1').addClass('animated fadeIn');
		}, {
 			 offset: '50%;;'
	});

	/*$('.js--wp-2').waypoint(function(direction){
		$('.js--wp-2').addClass('animated fadeInUp');
		}, {
 			 offset: '50%;;'
	});

	$('.js--wp-3').waypoint(function(direction){
		$('.js--wp-3').addClass('animated fadeInRight');
		}, {
 			 offset: '50%;;'
	});*/

	$('.js--nav-icon').click(function(){
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon span');
		nav.slideToggle(200);
		
		if(icon.hasClass('js--menu')){
			icon.addClass('js--menus');
			icon.removeClass('js--menu');
			icon.empty();
			icon.prepend('<i class="fas fa-times"></i>');
		}else{
			icon.addClass('js--menu');
			icon.removeClass('js--menus');
			icon.empty();
			icon.prepend('<i class="fas fa-bars"></i>');
		}

	});
});
