// import express so we can use easliy use Node as a server.
const express = require("express");
const app = express();
// instantiating a port number to use when sending http requests.
const port = 8000;

// added middelware functions to access and parse through post data
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );





app.listen( port, () => console.log(`Listening on port: ${port}`) );
