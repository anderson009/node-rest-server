const mongoose = require('mongoose');
const config = require('./config/config');


const express = require('express')
const app = express()


const bodyParser = require('body-parser');
 app.use(bodyParser.urlencoded ({extendend: false}));


app.use( require('./rutas/usuarios') );



mongoose.connect('mongodb://localhost:27017/cafe', (err, rep) =>{
	if (err) throw err;

	console.log('base de datos ONLINE');
});

app.listen(process.env.PORT, () =>{
	console.log(`es cuchando puerto`, process.env.PORT);
})