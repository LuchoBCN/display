/*
$(document).ready( function() {

	
	var clickEvent = false;
	$('#myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$(this).parent().addClass('active');
            $('.nav li').removeClass('active');
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});        
        
});
*/

$(document).ready( function() {
    
    
    
	
	var clickEvent = false;
	$('#Somos-myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$(this).parent().addClass('active');
            $('#Somos-myCarousel .nav li').removeClass('active');
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
    
    
    
    
	var clickEvent = false;
	$('#cuanti-myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$(this).parent().addClass('active');
            $('#cuanti-myCarousel .nav li').removeClass('active');
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
    
    
    
    
    	var clickEvent = false;
	$('#cuali-myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$(this).parent().addClass('active');
            $('#cuali-myCarousel .nav li').removeClass('active');
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
    
    
    
    
        var clickEvent = false;
	$('#panel-myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$(this).parent().addClass('active');
            $('#panel-myCarousel .nav li').removeClass('active');
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');
			}
		}
		clickEvent = false;
	});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});