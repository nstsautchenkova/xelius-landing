//load
$(window).on('load', function () {
	$('#preloader').delay(700).fadeToggle(500);
	
});
$(window).on('load', function () {
	function anims() {
	  $('.start-anim').addClass('anim');
	}
	setTimeout(anims, 1000);

});




$(document).scroll(function () {
	var WinTop = $(window).scrollTop();
	var docHeight = $(window).height();

	$('.fadeEl').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('anim');
		}
	});
	
	$('.animation').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('start-animation');
		}
	});
	
});

 
$(document).ready(function(){
	$(".anchor-profit").on("click", function (event) {
		event.preventDefault();
		$('#home').removeClass('active');
		$('#home').addClass('animLeft');
		$('#profit').addClass('animRight');
		
	});
});

$(document).ready(function(){
	$(".link-calculator").on("click", function (event) {
		event.preventDefault();
		$('#profit').removeClass('active');
		$('#profit').removeClass('animRight');
		$('#profit').addClass('animLeft');
		$('#calculator').addClass('animRight');
		
	});
});
$(document).ready(function(){
	$(".link-profit-total").on("click", function (event) {
		event.preventDefault();
		$('#calculator').removeClass('active');
		$('#calculator').removeClass('animRight');
		$('#calculator').addClass('animLeft');
		$('#profit-total').addClass('animRight');
		
	});
});

// back
$(document).ready(function(){
	$(".back-profit").on("click", function (event) {
		event.preventDefault();
		$('#calculator').removeClass('active');
		$('#calculator').addClass('animToRight');
		$('#calculator').removeClass('animRight');
		
		$('#profit').addClass('active');
		$('#profit').removeClass('animLeft');
		$('#profit').addClass('animToLeft');
		
		function animEl() {
		  $('#profit').removeClass('animToLeft');
		  $('#calculator').removeClass('animToRight');
		}
		setTimeout(animEl, 1500);
	});
});

$(document).ready(function(){
	$(".back-calculator").on("click", function (event) {
		event.preventDefault();
		$('#profit-total').removeClass('active');
		$('#profit-total').addClass('animToRight');
		$('#profit-total').removeClass('animRight');
		
		$('#calculator').addClass('active');
		$('#calculator').removeClass('animLeft');
		$('#calculator').addClass('animToLeft');
		
		function animEl() {
		  $('#calculator').removeClass('animToLeft');
		  $('#profit-total').removeClass('animToRight');
		}
		setTimeout(animEl, 1500);
	});
});


// ps
$(document).on("ready", function () {
    $(".ps .ps-item").click(function () {
        $(".ps .ps-item").removeClass('active');
		$(this).addClass('active');
    });
});
