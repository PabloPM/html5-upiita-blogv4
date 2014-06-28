/* obtener las librerias */
var express = require("express");
var nunjucks = require("nunjucks");
var bodyParser = require("body-parser");

/*app representa la funcionalidad de la aplicacion web*/
var app = express();

app.listen(8080);
console.log("servidor levantado");

/*usamos body parser para recibir datos del cliente*/
app.use( bodyParser.urlencoded({
	extended: true
}) );
console.log("body parser configurado");

/*configurar vistas estaticas css, videos, imagenes, 
 * fuentes, javascript*/
app.use("/videos", express.static( __dirname + "/videos" ) );
app.use("/fuentes", express.static( __dirname + "/fuentes" ) );
app.use("/imagenes", express.static( __dirname + "/imagenes" ) );
app.use("/css", express.static( __dirname + "/css" ) );
app.use("/javascript", express.static( __dirname + "/javascript" ) );

console.log("rutas estaticas configuradas");

/*configurar la carpeta de vistas*/
nunjucks.configure( __dirname + "/vistas", {
	express: app
} );

console.log("sistemas de templates configurado");
app.get("/", function(req, res){
	//res.send("Repondiendo a la peticion get /");
	res.render("index.html");
} );

app.get("/galeria", function(req, res){
	//res.send("Repondiendo a la peticion get /");
	res.render("galeria.html");
} );

/*respoder a una peticion post*/
app.post("/suscribir", function(req, res){
	var parametroEmail = req.body.correo;
	console.log("Recibi " + parametroEmail );
	
	res.render("suscrito.html",{
		email: parametroEmail
	});
} );





