const express = require("express");
const router = express.Router();
//requerimos la clase monederoController
const viajeController = require("../controllers/viaje.controller");

router.get('/', viajeController.listarViajes);
router.post('/', viajeController.agregarViaje);
router.delete('/:id', viajeController.eliminarViaje);




module.exports = router;