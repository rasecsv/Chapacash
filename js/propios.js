$(function(){
	//si la pantalla es menor a 768
	if($(window).width()<768){
		$('#llamanos-flotante').css('display', 'none');
		//Reduce el tamaño del logo a 50% y los paddings laterales a 0
		$('.navbar-brand').css({'width': '50%', 'padding-left': '0', 'padding-right': '0'});
	}

	//si se modifica el tamaño
	$(window).resize(function(){
		if($(window).width()<768){
			$('#llamanos-flotante').css('display', 'none');
			//Reduce el tamaño del logo a 50% y los paddings laterales a 0
			$('.navbar-brand').css({'width': '50%', 'padding-left': '0', 'padding-right': '0'});
		}
		else{
			$('#llamanos-flotante').css('display', 'block');
			//Regresa el tamaño del logo a como estaba
			$('.navbar-brand').css({'width': 'initial', 'padding-left': 'initial', 'padding-right': 'initial'});
		}
	});
	//console.log($(window).scrollTop());

	$(window).scroll(function(){
		if($(document).scrollTop()>=514 && $(document).scrollTop()<=3300){//3225
		$('#img-flotante').attr('src', 'images/call.png');
		}
		else{
			$('#img-flotante').attr('src', 'images/call-2.png');	
		}
	});
    
	$('#li-prestamos, #conocer-mas').click(function(){
		$('html,body').animate({
	    	scrollTop: $("#prestamos").offset().top
		}, 2000);
	});

	$('#li-porqueelegirnos, #btn-porqueelegirnos').click(function(){
		$('html,body').animate({
	    	scrollTop: $("#porqueelegirnos").offset().top
		}, 2000);
	});

	$('#li-faq').click(function(){
		$('html,body').animate({
	    	scrollTop: $("#faq").offset().top
		}, 2000);
	});

	$('#aun-no-te-decides').click(function(){
		$('html,body').animate({
	    	scrollTop: $("#nuestros-clientes-dicen").offset().top
		}, 2000);
	});

	//Cambia el color de los elementos cuando carga la página
	$('#amount').css('border', '2px solid #75c322');
	$('.ui-widget.ui-widget-content').css('border', '2px solid #75c322');
	//$('.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default, .ui-button, html .ui-button.ui-state-disabled:hover, html .ui-button.ui-state-disabled:active').css('border', '2px solid #75c322');
	
	/*$('#solesTexto').blur(function(){
		var txt = $('#solesTexto').value();
		var simb = 'S/ ';
		var txtC = simb.concat(txt);
		$('#solesTexto').value = txtC;
	})
	
	$('#solesTexto').focus(function(){
		var txt1 = $('#solesTexto').value();
		var txtC1 = str.substring(3);
		$('#solesTexto').value = txtC1;
	})*/
});

function ponerSimb()
{
	var txt = document.getElementById('solesTexto').value;
	var simb = 'S/ ';
	var txtC = simb.concat(txt);
	document.getElementById('solesTexto').value = txtC;
}

function quitaSimb()
{
	var txt1 = document.getElementById('solesTexto').value;
	var txtC1 = txt1.substring(3);
	document.getElementById('solesTexto').value = txtC1;
}


function ponerDias()
{
	var txt = document.getElementById('diasTexto').value;
	var simb = ' dias';
	var txtC = txt.concat(simb);
	document.getElementById('diasTexto').value = txtC;
}

function quitaDias()
{
	var txt1 = document.getElementById('diasTexto').value;
	var txtC1 = txt1.substring(0,2);
	document.getElementById('diasTexto').value = txtC1;
}
