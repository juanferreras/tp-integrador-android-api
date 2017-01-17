var mongoose = require('mongoose');

var platoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: String,
    foto: String,
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
    restauranteId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
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
    platos: [platoSchema]
});

mongoose.model('Restaurante', restauranteSchema);
mongoose.model('Pedido', pedidoSchema);