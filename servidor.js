/* obtener las librerias */
var express = require("express");
var nunjucks = require("nunjucks");
var bodyParser = require("body-parser");
var socketio = require("socket.io");
var http = require("http");

/*app representa la funcionalidad de la aplicacion web*/
var app = express();
var servidor = http.createServer(app);
servidor.listen(8080);

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

app.get("/ubicacion", function(req, res){
	//res.send("Repondiendo a la peticion get /");
	res.render("ubicacion.html");
} );

app.get("/chat", function(req, res){
	//res.send("Repondiendo a la peticion get /");
	res.render("chat.html");
} );

app.get("/contacto", function(req, res){
	//res.send("Repondiendo a la peticion get /");
	res.render("contacto.html");
} );

/*respoder a una peticion post*/
app.post("/suscribir", function(req, res){
	var parametroEmail = req.body.correo;
	console.log("Recibi " + parametroEmail );
	
	res.render("suscrito.html",{
		email: parametroEmail
	});
} );

app.post("/contactar", function(request, response){
	var nombre = request.body.nombre;
	var email = request.body.correo;
	var web = request.body.sitio;
	var comentario = request.body.comentario;
	response.render("contactar.html",{
		nombre: nombre,
		emai: email,
		comentario: comentario
	});
});

//escuchar peticiones de conexion
var io = socketio.listen(servidor);
//escuchar mensaje de cualqueir cliente
io.sockets.on("connection", function(socket){
	//enviarle el mensaje que recibi a todos los demas clientes
	socket.on("mensaje_al_servidor", function(datos){
		console.log(datos.nombre);
		console.log(datos.mensaje);
		//enviale mensaje a todos los clientes
		io.sockets.emit("mensaje_al_cliente",{
			mensaje: datos.mensaje,
			nombre: datos.nombre
		});
	});
});

