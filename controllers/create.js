var Book = require('../models/book');

module.exports = function(req, res, next) {
	var Book = new Person(req.body);
	Book.save(function(err){
		if (err) throw err;
		console.log('create successifully!');
		Person.find({}, function(err, users) {
			if (err) throw err;

			res.json({userinfos: users});
		});
	});
};
