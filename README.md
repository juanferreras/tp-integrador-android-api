# TP Integrador Android API

API de Express para el TP Integrador Android, de la cátedra "Desarrollo de Aplicaciones Móviles" 2016 2do Cuatrimestre.

## Building
* ```npm install``` para bajar las dependencias.
* ```mongod``` (en otra terminal) para iniciar el servicio de MongoDB
* ```npm run cargar-datos``` para cargar datos de prueba
* ```npm start``` para ejecutar la aplicación. Para que funcionen las notificaciones FCM asegurarse de tener seteada la variable de entorno `FCM` con el valor de la clave de servidor.

## Endpoints
* GET ```'/api/restaurantes/:restauranteId'```
* POST ```'/api/restaurantes/:restauranteId/pedidos'``` con:
  * `mesa`, `precioTotal` (requeridos)
  * `platos` (lista de platos), `token` (identificador del dispositivo de Firebase)