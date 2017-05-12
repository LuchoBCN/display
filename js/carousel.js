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
    
    
    
    //MODULO PARA ACTUALIZAR EL ACTIVE DE LAS NAV PILLS AL USAR LOS BTN DE NEXT Y PREV
    
    //Buscar en div #carousel - bucar el item que está active y sacarle el número de item en el array - darle click al nav pill con el data-slide-to con ese valor. Listo.
    
$("[data-slide=next]").click(function(){
    
    console.log("le diste click a next");
    
    
    var padre = $(this).parent();
    var padrename = $(this).parent().attr("class")
    var index = $(this).parent().find('.active:first').attr("lamina");
    var indexplus = index + 1;
    var test = $(padre).find("li[data-slide-to=" + indexplus + "]").attr("data-slide-to");
    var enlace = $(padre).find("li[data-slide-to=" + indexplus + "]");
    var link = $(enlace).find('a:first').click();
    
    console.log(padrename);
    console.log(index);
    console.log(test);  
    console.log(link);
    
//FALTA SABER COMO SUMAR UN AL VALOR DE ENLACE
    
    
});
    
    
    
    
    
    
    
    
});