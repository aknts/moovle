// We setup our connection to mysql, plus a function to query the defined database.
const db = {
	connection:null,
	init:function(){
		const mysql     = require('mysql');
		this.connection = mysql.createConnection({
			host     : 'localhost',
			user     : 'nodejs',
			password : 'webdev_2018_web',
			database : 'moviesdb',
			port: 3306
		});
		this.connection.connect();
		console.log("Connected!");
	},
	query:function(q,callback){
		this.connection.query(q, function (error, results, fields) {
			if (error != null) callback(error);
			console.log(results);
			console.log(error);
			callback(null,results);
		});
	}
};
// We return our object for usage where is needed
module.exports=db;