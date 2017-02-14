db = connect("localhost/Pedime")

db.restaurantes.insert({
  "nombre": "Mc Donalds",
  "direccion": "San Martín 2702",
  "platos": [{
    "nombre": "Cuarto de libra con queso",
    "descripcion": "Doble queso derretido. La compañia perfecta.",
    "foto": "/images/cuarto-de-libra-con-queso.png",
    "precio": 90.00
  },{
    "nombre": "Doble cuarto de libra con queso",
    "descripcion": "Un cuarto de libra de pura carne con queso. Doble sabor.",
    "foto": "/images/doble-cuarto-de-libra-con-queso.png",
    "precio": 130.00
  },{
    "nombre": "McNIFICA",
    "descripcion": "Una gran hamburguesa de pura carne y queso.",
    "foto": "/images/mc-nifica.png",
    "precio": 130.00
  },{
    "nombre": "Big Mac",
    "descripcion": "Hamburguesa de pura carne con salsa y queso.",
    "foto": "/images/big-mac.png",
    "precio": 80.00
  },{
    "nombre": "Hamburguesa con queso",
    "descripcion": "Un delicioso clásico con una rodaja de queso derretido.",
    "foto": "/images/hamburguesa-con-queso.png",
    "precio": 75.00
  },{
    "nombre": "Hamburguesa",
    "descripcion": "Un delicioso clásico. Prueba las mejores hamburguesas.",
    "foto": "/images/hamburguesa.png",
    "precio": 65.00
  },{
    "nombre": "Mushroom Dijon",
    "descripcion": "Deliciosa hamburguesa con hongos salteados, queso emental, tocino rústico, ceboll agrillada, con mostaza Dijon, en un pan tipo brioche.",
    "foto": "/images/dijon.png",
    "precio": 150.00
  },{
    "nombre": "Club House",
    "descripcion": "Los mejores ingredientes, la mejor combinación en una sola hamburguesa.",
    "foto": "/images/Clubhouse.png",
    "precio": 130.00
  },{
    "nombre": "Papas",
    "descripcion": "Un delicioso clásico. Prueba las mejores hamburguesas.",
    "foto": "/images/papas-drag.png",
    "precio": 50.00
  },{
    "nombre": "Ensalada",
    "descripcion": "La ensalada para acompañar tu McCombo fue mejorada con una mayor variedad de hojas y tomates cherry.",
    "foto": "/images/ensalada.png",
    "precio": 50.00
  }]
});
db.restaurantes.insert({
  "nombre": "El bolon verde",
  "direccion": "9 de julio 3050",
  "platos": [{
    "nombre": "Ensaladilla Picante",
    "descripcion": "Pimiento asado, bacalao desalado y nuestra salsa personal a base de caldo de pimiento, ajo y aceite de oliva.",
    "foto": "/images/ensaladilla_picante.jpg",
    "precio": 230.00
  },{
    "nombre": "Ensalada de escabeches",
    "descripcion": "Tomate valenciano, boquerones y ventresca de atún marinados con nuestra salsa especial.",
    "foto": "/images/escabeches.jpg",
    "precio": 250.00
  },{
    "nombre": "Esgarraet",
    "descripcion": "Pimiento asado, bacalao desalado y nuestra salsa personal a base de caldo de pimiento, ajo y aceite de oliva.",
    "foto": "/images/esgarraet.jpg",
    "precio": 250.00
  },{
    "nombre": "Ajo Arriero",
    "descripcion": "Patata y bacalao ligado a mortero con ajo y aceite de oliva.",
    "foto": "/images/ajo.png",
    "precio": 320.00
  },{
    "nombre": "Clótxinas con tirabeques",
    "descripcion": "Clótxinas cocinadas al vapor.",
    "foto": "/images/Clotxinas-con-tirabeques_del.jpg",
    "precio": 350.00
  },{
    "nombre": "Bacalao con pisto valenciano",
    "descripcion": "Bacalao fresco cocinado al punto en el mismo pisto valenciano.",
    "foto": "/images/Bacalao-fresco-con-pisto-valenciano_del.jpg",
    "precio": 400.00
  },{
    "nombre": "Mousse de Piña, Limón y Hierbabuena",
    "descripcion": "Un postre refrescante, un sorbete convertido a mousse.",
    "foto": "/images/mousse.jpg",
    "precio": 150.00
  }]
});
db.restaurantes.insert({
  "nombre": "Pizza Vegana",
  "direccion": "Boulevard Pellegrini 3052",
  "platos": [{
    "nombre": "DELLA MAMMA",
    "descripcion": "Queso Paparella, Salsa de Tomates Casera, Aceitunas Verdes, Orégano, Alioli de Albahaca.",
    "foto": "/images/01-della-mamma.jpg",
    "precio": 129.00
  },{
    "nombre": "VEGALITANA",
    "descripcion": "Queso Paparella, Tomates en Rodajas, Ajo y Orégano, Alioli de Ajo.",
    "foto": "/images/02-vegalitana.jpg",
    "precio": 145.00
  },{
    "nombre": "CARAMELITA",
    "descripcion": "Queso Paparella, Cebolla Caramelizada, Orégano, Azúcar Integral Orgánica, Aceite de Oliva.",
    "foto": "/images/03-caramelita.jpg",
    "precio": 145.00
  },{
    "nombre": "VERDOLAGA",
    "descripcion": "Queso Paparella, Acelga al Vapor, Crema Vegana de Girasol, Parmesano Vegano, Alioli de Albahaca.",
    "foto": "/images/04-verdolaga.png",
    "precio": 149.00
  },{
    "nombre": "BOLONIA",
    "descripcion": "Queso Paparella, Soja Texturizada, Vino Tinto Organico, Salsa de Tomate Casera, Aceite de Albahaca.",
    "foto": "/images/05-bolonia.jpg",
    "precio": 149.00
  },{
    "nombre": "PUPURRA",
    "descripcion": "Queso Paparella, Puerro Salteado con ajo, Cebolla salteada, Ají Molido, Alioli de ajo.",
    "foto": "/images/06-pupurra.jpg",
    "precio": 159.00
  },{
    "nombre": "DE LA INDIA",
    "descripcion": "Queso Paparella, Salsa Tomate Casera, Berenjenas Grilladas, Semillas de Sésamo, Alioli de Albahaca.",
    "foto": "/images/07-de-la-india.jpg",
    "precio": 159.00
  },{
    "nombre": "PORTUGAL",
    "descripcion": "Queso Paparella, Morrones Rojos Grilladas, Morrones Verdes Grillados, Cebolla salteada, Semillas de Sésamo, Aceite de Oliva.",
    "foto": "/images/08-portugal.jpg",
    "precio": 169.00
  },{
    "nombre": "RÓCOLA",
    "descripcion": "Queso Paparella, Tomates Secos Especiados, Rúcula Fresca, Aceitunas Negras, Aceite de Oliva.",
    "foto": "/images/09-rocola.jpg",
    "precio": 175.00
  },{
    "nombre": "SUPER MARIO",
    "descripcion": "Queso Paparella, Champignones Salteados, Ajo y Perejil, Cebolla salteada, Semillas de Girasol, Alioli de Provenzal.",
    "foto": "/images/10-super-mario.jpg",
    "precio": 189.00
  }]
});