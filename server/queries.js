// We define a const that includes the needed information and function to connect to our database defined in the connection file.
const db = require('./connection');
// We initiate our connection to our database, no credentials are needed as they are hardcoded in the connection file.
db.init();

// We define a const that includes the queries needed to retrieve the needed information in each case.
const moviesdbqueries = {
	getMovieById:function(movieid, callback){
		const q = 'select * from movies where movieid in ('+movieid+')';
		db.query(q, function(err, result){
			if (err != null)
				callback(err);
			else
				callback(null,result);
		});
	},
	getMoviesByKeyword:function(searchstring, callback){
		const q = 'select * from movies where title like \'%'+searchstring+'%\'';
		db.query(q, function(err, result){
			if (err != null)
				callback(err);
			else
				callback(null,result);
		});
	},
	getUserRatings:function(userid, callback){
		const q = 'select * from ratings where userid in ('+userid+')';
		db.query(q, function(err, result){
			if (err != null)
				callback(err);
			else
				callback(null,result);
		});
	},
	getMovieRatings:function(movieid, callback){
		const q = 'select * from ratings where movieid in ('+movieid+')';
		db.query(q, function(err, result){
			if (err != null)
				callback(err);
			else
				callback(null,result);
		});
	}
	
};

// We export our const to make the above queries available to the rest of the app
module.exports = moviesdbqueries;