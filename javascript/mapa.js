$(function() {
	navigator.geolocation.getCurrentPosition(function(posicion){
		var latitud = posicion.coords.latitude;
		var longitud = posicion.coords.longitude;
		alert("lon " + longitud + " lat " + latitud);
	});

});
