$(function() {
	navigator.geolocation.getCurrentPosition(function(posicion) {
		var latitud = posicion.coords.latitude;
		var longitud = posicion.coords.longitude;
		//alert("lon " + longitud + " lat " + latitud);
		//pintar el mapa
		$("#mapa").goMap({
			markers : [{
				latitude: latitud,
				longitude: longitud
			}],
			zoom : 17
		});

	});

});
