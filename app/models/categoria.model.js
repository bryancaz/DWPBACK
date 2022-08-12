let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let monederoSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    descripcion: { type: String},
    estado: { type: Boolean, default: true },
},
    {
        timestamps: true,
        versionKey: false
    });

module.exports = mongoose.model('Categoria', monederoSchema, 'Categoria');