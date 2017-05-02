$(document).ready( function() {

	
	
	
	   $('#Somos-myCarousel').on('click', '.nav a', function() {
            $('#Somos-myCarousel .nav li a').removeClass('activa');
			$(this).addClass('activa');		
	});
    
    	$('#cuali-myCarousel').on('click', '.nav a', function() {
            $('#cuali-myCarousel .nav li a').removeClass('activa');
			$(this).addClass('activa');		
	});
    
    	$('#cuanti-myCarousel').on('click', '.nav a', function() {
            $('#cuanti-myCarousel .nav li a').removeClass('activa');
			$(this).addClass('activa');		
	});
    
    	$('#panel-myCarousel').on('click', '.nav a', function() {
            $('#panel-myCarousel .nav li a').removeClass('activa');
			$(this).addClass('activa');		
	});
    
    
    
    
    
    
    
    
    
    $('.navbar-nav').on('click', 'a', function() {
            $('.navbar-nav a').removeClass('activi');
			$(this).addClass('activi');		
	});
    
    
    
    
});