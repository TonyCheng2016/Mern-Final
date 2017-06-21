var Book = require('../models/book');

module.exports = function(req, res, next) {
	Book.findOneAndUpdate({ _id: req.params.id }, req.body, function(err, user) {
		if (err) throw err;
		console.log('update successifully!');
		Person.find({}, function(err, users) {
			if (err) throw err;

			res.json({userinfos: users});
		});
	});
};
