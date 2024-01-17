// Capa de datos en el servidor (Base de Datos Mock en Node.js)
const datosMock = [
    { id: 1, nombre: 'Dato 1' },
    { id: 2, nombre: 'Dato 2' },
    // Otros datos...
];

module.exports = {
    obtenerDatos: () => {
        return datosMock;
    },
    // Otras operaciones de base de datos simuladas...
};
