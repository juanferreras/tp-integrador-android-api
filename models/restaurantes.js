var mongoose = require('mongoose');

var platoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: String,
    precio: {
        type: Number,
        required: true,
        min: 0
    }
});

var pedidoSchema = new mongoose.Schema({
    mesa: {
        type: Number,
        required: true,
    },
    precioTotal: {
        type: Number,
        required: true,
        min: 0
    },
    platos: [platoSchema],
    hora: {
        type: Date,
        "default": Date.now
    },
    entregado: {
        type: Boolean,
        required: true,
        "default": false
    }
});

var restauranteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    direccion: String,
    platos: [platoSchema],
    pedidos: [pedidoSchema]
});

mongoose.model('Restaurante', restauranteSchema);