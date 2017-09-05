$(document).ready(function() {

	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},4000);
	});
	
	$('#home-img-container').hover(function(){
		$('#monkey-2').stop().fadeIn();

	}, function(){
		$('#monkey-2').stop().fadeOut();
	})

	
})