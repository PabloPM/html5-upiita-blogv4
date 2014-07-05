$(function(){
	//alert("ajax");
	var enlace=$("#menu ul li a");
	var contenido = $("#contenedor");
	
	enlace.click(function(evento){
		seccion = $(evento.target);
		ruta = seccion.data("ruta");
		contenido.load(ruta);
		return false;
	});
});
