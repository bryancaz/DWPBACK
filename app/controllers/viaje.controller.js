const Viaje = require("../models/viaje.model");
const mongoose = require("mongoose");
//Creamos una clase que devuelva una función que se ejecute cuando se llame al método get de la ruta /monedero
class ViajeController {
    constructor() {
        this.listarViajes = this.listarViajes.bind(this);
        this.agregarViaje = this.agregarViaje.bind(this);
        this.eliminarViaje = this.eliminarViaje.bind(this);
    }
    listarViajes(req, res) {
        try {

            const listar = async () => {
                const viajes = await Viaje.find({ estado: true });
                if (!viajes) return res.status(400).json({ "mensaje": "No hay viajes" });
                return res.status(200).json(viajes);
            }

            listar();
        } catch (error) {
            res.status(500).json({ msg: "Error al listar viajes" });
        }
    }


    agregarViaje(req, res) {
        try {
            const { nombre, descripcion, ubicacion, fecha, avatar } = req.body;

            const guardar = async () => {
                const viaje = new Viaje({
                    nombre,
                    descripcion,
                    ubicacion,
                    fecha,
                    avatar
                });
                await viaje.save();
                return res.status(200).json({ msg: "Se guardó la viaje" });
            } 
            guardar();

        }
        catch (err) {
            res.status(500).json({ msg: "Error al guardar" });
        }
    }

    eliminarViaje(req, res) {
        const val_id = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(val_id)) return res.status(400).json({ "mensaje": "El id no es valido" });
        const eliminar = async () => {
            //validamos si la viaje no se encuentra eliminada
            const viaje = await Viaje.findById(val_id);
            if (!viaje) return res.status(400).json({ "mensaje": "La viaje no existe" });
            if (viaje.estado == false) return res.status(400).json({ "mensaje": "La viaje ya se encuentra eliminada" });
            await viaje.findByIdAndUpdate(val_id, { estado: false });
            return res.status(200).json({ "mensaje": "Se elimino la viaje" });

        }
        eliminar();

    }

}


module.exports = new ViajeController();