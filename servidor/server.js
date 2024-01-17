const express = require('express');
const cors = require('cors');
const datos = require('../datos/datos');  // Importa el módulo de datos
const app = express();
const puerto = 3002;

// Configura CORS para permitir todas las solicitudes
app.use(cors());

// Ruta para manejar la solicitud y enviar datos al cliente
app.get('/obtenerDatos', (req, res) => {
    // Lógica para obtener datos (utiliza la función de datos.js)
    const datosObtenidos = datos.obtenerDatos();
    res.json(datosObtenidos);
});

app.listen(puerto, () => {
    console.log(`El servidor está escuchando en el puerto ${puerto}`);
});
