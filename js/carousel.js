$(document).ready( function() {
    
    
    
    
	   //BORRA LOS ESTILOS DE LAS PILLS Y LAS COLOCA EN UNACTIVAS - CHAPUZA
        $('.tabcontent .nav li a').addClass('unactiva');
    
        
 
    //ACTIVE UNACTIVE MODULE DE LAS PILLS
	
	   $('#Somos-myCarousel').on('click', '.nav a', function() {
            $('#Somos-myCarousel .nav li a').removeClass('activa');
            $('#Somos-myCarousel .nav li a').addClass('unactiva');
            $(this).removeClass('unactiva');
			$(this).addClass('activa');		
	});
    
    	$('#cuali-myCarousel').on('click', '.nav a', function() {
            $('#cuali-myCarousel .nav li a').removeClass('activa');
            $('#cuali-myCarousel .nav li a').addClass('unactiva');
            $(this).removeClass('unactiva');
			$(this).addClass('activa');		
	});
    
    	$('#cuanti-myCarousel').on('click', '.nav a', function() {
            $('#cuanti-myCarousel .nav li a').removeClass('activa');
            $('#cuanti-myCarousel .nav li a').addClass('unactiva');
            $(this).removeClass('unactiva');
			$(this).addClass('activa');		
	});
    
    	$('#panel-myCarousel').on('click', '.nav a', function() {
            $('#panel-myCarousel .nav li a').removeClass('activa');
            $('#panel-myCarousel .nav li a').addClass('unactiva');
            $(this).removeClass('unactiva');
			$(this).addClass('activa');
	});
    
    
    
    
    
    //RETORNA A LA PRIMERA LAMINA EN CADA SERVICIO
    
    $('#canalsondeo').on('click', function() {

        console.log( "click en el fist child de #somos-ul");
        $('#somos-ul').click();
        $('#somos-ul a').click();
        
        });
    
    
     $('#cuanti-link').on('click', function() {

        console.log( "click en el cuantitativos");
        $('#estudios-ul').click();
        $('#estudios-ul a').click();
        
        });
    
    
     $('#cuali-link').on('click', function() {

        console.log( "click en el cualitativos");
        $('#foros-ul').click();
        $('#foros-ul a').click();
        
        });
    
    
    
    
    
    
    
    
    
    // ACTIVE UNACTIVE MODUL DE LOS SERVICIOS BTN
    
    $('.tablinks').on('click', function() {
            $('.tablinks').removeClass('activi');
            $('.tablinks').addClass('unactivi');
            $(this).removeClass('unactivi');		
			$(this).addClass('activi');		
	});
    
    
    
    
});