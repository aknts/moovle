// Define a const that includes the needed queries defined in the queries file
const queries = require('./queries');

// We return in which requests our app listens to and what to do in each one.
// Each request in handled with a different query based on the queries file.
// Each query is executed against our database defined in the connection file.
// The end result is returned to the client app that is running on user's browser.
module.exports = {
	configure:function(app){
		app.post('/ratings', function (req, res) {
			console.log(req.body.movieList.join());
			queries.getMovieRatings(req.body.movieList.join(), function(err, result){			
				if (err) throw err;
				res.json(result);
			});
		}),
		app.post('/movie', function (req, res) {
			console.log(req.body.keyword);
			queries.getMoviesByKeyword(req.body.keyword, function(err, result){			
				if (err) throw err;
				res.json(result);
			});
		}),
		app.get('/movie/:id', function (req, res) {
			queries.getMovieById(req.params.id, function(err, result){			
				if (err) throw err;
				res.json(result);
			});
		}),
		app.get('/ratings/:id', function (req, res) {
			queries.getUserRatings(req.params.id, function(err, result){			
				if (err) throw err;
				res.json(result);
			});
		});
	}
};