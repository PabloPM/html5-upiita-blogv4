$(function() {
	alert("Chat!!");
	/*io se define cuando se importo socket io*/
	var socket = io.connect(location.origin);
	/*enviar mensaje al servidor*/
	$("#boton").click(function() {
		/*obtener los datos que voy a enviar*/
		var nombreCliente = $("#nombre-usuario").val();
		var mensajeCliente = $("#mensaje-usuario").val();
		/* enviar datos al servidor */
	});
	/*recibir mensaje del servidor*/
	var mostrar_mensaje = function(nom, mens) {
		var caja = "<div class='mensaje'> <span>" + nom + " dice: </span> " + mens + "</div>";
		$("#mensajes").append(caja);
	};
});

