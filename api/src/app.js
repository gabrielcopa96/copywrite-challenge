const express = require('express');

const cookieParser = require('cookie-parser');
const morgan = require("morgan");

const routes = require('./routes/index.js');


const app = express(); // crea una instancia de express

app.name = "API"; // nombre de la aplicación

app.use(express.urlencoded({ extended: true, limit: '50mb' })); // para que se puedan enviar datos en formato json

app.use(morgan('dev')) // registra en consola las peticiones

app.use(cookieParser()); // para leer cookies

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // actualizo para que sea accesible desde cualquier lugar
  res.header("Access-Control-Allow-Credentials", "true"); // actualizo para dar acceso a los cookies
  res.header(
    "Access-Control-Allow-Headers", // actualizo para que se puedan enviar los headers
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST"); // actualizo para que se puedan enviar los metodos y solo metodos GET y POST
  next();
}
);

app.use('/', routes); // actualizo para que se pueda acceder a la ruta '/'

module.exports = app; // exporto el app para que sea accesible desde afuera


