var mongoose = require('mongoose');
var Restaurante = mongoose.model('Restaurante');
var Pedido = mongoose.model('Pedido');
var FCM = require('fcm-push');
var serverKey = process.env.FCM;

if (!process.env.FCM) 
  console.log("No se encontró la API Key de Firebase. Las notificaciones Push no van a funcionar.")

var sendJSON = function(res, status, content) {
  res.status(status);
  res.json(content);
};

// POST nuevo pedido 
module.exports.postPedido = function(req, res) {
  if (!req.params.restauranteId) {
    sendJSON(res, 404, {
      "message": "No se encuentra el id del Restaurante en la request"
    });
    return;
  }

  Pedido.create({
    restauranteId: req.params.restauranteId,
    mesa: req.body.mesa,
    precioTotal: req.body.precioTotal,
    platos: req.body.platos
  }, function(err, pedido) {
    if (err) {
      sendJSON(res, 400, err);
    } else {
      // se creó el pedido correctamente
      sendJSON(res, 201, pedido);

      // mandar notificación push pasado 5 segundos
      setTimeout(function(){
        gestionarPedido(req.body.token);
      }, 5000)
    }
  });
};

var gestionarPedido = function(token){
  // si no llegó el token del dispositivo, cancelar
  if (!token || !serverKey) return;
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