var Book = require('../models/book');

module.exports = function(req, res, next) {
	Book.find({}, function(err, users) {
		if (err) throw err;
		console.log('readall successifully!');
		res.json({userinfos: users});
	});
};
