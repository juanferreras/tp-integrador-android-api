var mongoose = require('mongoose');
var Restaurante = mongoose.model('Restaurante');
var FCM = require('fcm-push');
var serverKey = process.env.FCM;

if (!process.env.FCM) 
  console.log("No se encontró la API Key de Firebase. Las notificaciones Push no van a funcionar.")

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
          sendJSON(res, 404, err);
          return;
        }
        // se encontró el restaurante buscado
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
            sendJSON(res, 400, err);
          } else {
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
        gestionarPedido(req.body.token);
      }
    });
  }
}

var gestionarPedido = function(token){
  // si no llegó el token del dispositivo retornar
  if (!token) return;
  var fcm = new FCM(serverKey);

  var message = {
    to: token, 
    notification: {
        title: '¡Tu pedido está listo!',
        body: 'Aguardá unos minutos y el mozo te lo va a alcanzar. ¡Gracias!'
    }
  };

  fcm.send(message, function(err, response){
      if (err) {
          console.log("Error enviando notificación push:", err);
      } else {
          console.log("Éxito enviando notificación push:", response);
      }
  });
}