// 1. IMPORTAMOS LAS DEPENDENCIAS QUE VAMOS A USAR
import express from 'express';
import path from 'path';
import dotenv from "dotenv";
import conexionMongo from './SRC/Config/basedatos.js';


//configuramos nuestro servidor servidor
const app = express();
const port = 9000; 

// configuramos la variables de entorno
dotenv.config();

//  configurar conexión de nuestra base de datos
conexionMongo();

// 2. ESTABLECEMOS LAS RUTAS PARA NUESTRO FRONT

// obtenemos la ruta absoluta de nuestra carpeta public
const rutaPublica = path.join(process.cwd(), 'public');
// configuramos middleware
// middleware para usar los archivos estáticos dentro de public
app.use(express.static(rutaPublica));
// middleware para cuando esperas recibir datos en formato JSON
app.use(express.json());    
app.use('/api', usuarioRouter);

// Ruta para index.html
// manejo de solicitud en una aplicación Node.js
app.get('/', (req, res) => {
    // req -> request - solicitud del cliente
    // res -> res - respuesta por parte del servidor
    // sendFile -> enviamos una ruta como respuesta
  res.sendFile(path.join(rutaPublica, 'index.html'));
});


// 3. INICIALIZAMOS EL SERVIDOR
app.listen(port, () => {
    console.log(`El servidor está escuchando en http://localhost:${port}`);
  });