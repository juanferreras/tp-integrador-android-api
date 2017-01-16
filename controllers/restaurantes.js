var mongoose = require('mongoose');
var Restaurante = mongoose.model('Restaurante');

var sendJSON = function(res, status, content) {
  res.status(status);
  res.json(content);
};

// GET información de Restaurante con id restauranteId
module.exports.getRestaurante = function(req, res) {
  if (req.params && req.params.restauranteId) {
    Restaurante
      .findById(req.params.restauranteId.toString())
      .exec(function(err, restaurante) {
        if (!restaurante) {
          // no se encuentra un restaurante con ese id
          sendJSON(res, 404, {
            "message": "No se ha encontrado el Restaurante con ese id."
          });
          return;
        } else if (err) {
          // se ha producido otro error genérico
          console.log(err);
          sendJSON(res, 404, err);
          return;
        }
        // se encontró el restaurante buscado
        console.log(restaurante);
        sendJSON(res, 200, restaurante);
      });
  } else {
    // la request no traía un id
    sendJSON(res, 404, {
      "message": "No se encuentra el id del Restaurante en la request"
    });
  }
};

// POST nuevo pedido 
module.exports.postPedido = function(req, res) {
  if (req.params.restauranteId) {
    Restaurante
      .findById(req.params.restauranteId)
      .exec(
        function(err, restaurante) {
          if (err) {
            // se ha producido un error genérico
            console.log("aca2")
            sendJSON(res, 400, err);
          } else {
            console.log("aca")
            // se encontró el restaurante, se puede agregar pedido
            agregarPedido(req, res, restaurante);
          }
        }
    );
  } else {
    // la request no traía un id
    sendJSON(res, 404, {
      "message": "No se encuentra el id del Restaurante en la request"
    });
  }
};

var agregarPedido = function(req, res, restaurante){
  if (!restaurante) {
    sendJSON(res, 404, {
      "message": "No se encuentra el id del Restaurante en la request"
    });
  } else {
    restaurante.pedidos.push({
      mesa: req.body.mesa,
      precioTotal: req.body.precioTotal,
      platos: req.body.platos
    });
    restaurante.save(function(err, restaurante) {
      if (err) {
        // se ha producido un error genérico
        sendJSON(res, 400, err);
      } else {
        // retornamos el ultimo pedido agregado
        nuevoPedido = restaurante.pedidos[restaurante.pedidos.length - 1];
        sendJSON(res, 201, nuevoPedido);
      }
    });
  }
}