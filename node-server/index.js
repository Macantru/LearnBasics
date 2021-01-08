const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

/**
 * req -> Request - Peticion
 * res -> Response - Respuesta
 */

app.get('/', function(peticion, respuesta)  {
    const {body, query, params, headers} = peticion;
    respuesta.json({body, params, query, headers});
})
app.post('/', function(peticion, respuesta)  {
    const {body, query, params, headers} = peticion;
    respuesta.json({body, params, query, headers});
})

app.listen(3000);
console.log("Aplicacion corriendo en el puerto 3000");

