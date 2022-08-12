let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let viajeSchema = new Schema({
    nombre: { type: String, required: [true, 'El titulo es necesario'] },
    descripcion: { type: String, required: [true, 'La descripcion es necesaria'] },
    ubicacion: { type: String },
    fecha: {type: String},
    avatar: {type: String}
},
    {
        timestamps: true,
        versionKey: false
    });

module.exports = mongoose.model('Viaje', viajeSchema, 'Viaje');