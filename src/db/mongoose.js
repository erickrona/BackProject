
const mongoose = require('mongoose')

mongoose.set("useFindAndModify", false);
// revisa tu connectionURL aqui :-)
if(process.env.NODE_ENV == 'production'){
	var connectionURL = process.env.DATABASE_CONNECTION_STRING
}
else{
	var connectionURL =	require('../config.js').connectionURL
}



mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(function(){
	console.log("Conexion DB exitosa")
	/*app.listen(port, function() {
  		console.log('Server Up and running!')
	})*/
}).catch(function(){
	console.log("Conexion DB fallida")
})
