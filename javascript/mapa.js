$(function() {
	navigator.geolocation.getCurrentPosition(function(posicion) {
		var latitud = posicion.coords.latitude;
		var longitud = posicion.coords.longitude;
		//alert("lon " + longitud + " lat " + latitud);
		//pintar el mapa
		$("#mapa").goMap({
			markers : [{
				latitude: latitud,
				longitude: longitud,
				draggable: true,
				icon: "../imagenes/marcadores/arrastrar.png",
				title: "UPIITA",
				html:"Curso Node.js y HTML5"
			}],
			zoom : 17
		});

	});

});
