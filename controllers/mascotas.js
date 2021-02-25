const Mascota = require('../models/Mascota')


function crearMascota(req, res) {
    // Instanciaremos un nuevo usuario utilizando la clase usuario
    var mascota = new Mascota(req.body)
    res.status(201).send(mascota)
}

function obtenerMascotas(req, res) {
    // Simulando dos usuarios y respondiendolos
    var mascota1 = new Mascota(1, 'Charli', 'Gato', 'foto1.jpg', 'Linda mascota', 'Juan Vega', 'Centro')
    var mascota2 = new Mascota(2, 'Zeus', 'Perro', 'foto2.jpg', 'Linda mascota', 'Pedro perez', 'Pogreso')
    res.send([mascota1, mascota2])
}

function modificarMascota(req, res) {
    // simulando un usuario previamente existente que el cliente modifica
    var mascota1 = new Mascota(req.params.id, 'Charli', 'Gato', 'foto3.jpg', 'Linda mascota', 'Juan Vega', 'Centro')
    var modificaciones = req.body
    mascota1 = {...mascota1, ...modificaciones }
    res.send(mascota1)
}

function eliminarMascota(req, res) {
    // se simula una eliminación de usuario, regresando un 200
    res.status(200).send(`Mascota ${req.params.id} eliminada`);
}

// exportamos las funciones definidas
module.exports = {
    crearMascota,
    obtenerMascotas,
    modificarMascota,
    eliminarMascota
}