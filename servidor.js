/* obtener las librerias */
var express = require("express");

/*app representa la funcionalidad de la aplicacion web*/
var app = express();

app.listen(8080);
console.log("servidor levantado");

/*configurar los controladores, reciben peticiones*/
app.get("/", function(req, res){
	res.send("Repondiendo a la peticion get /");
} );
