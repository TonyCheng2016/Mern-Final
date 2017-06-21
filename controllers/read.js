var Book = require('../models/book');

module.exports = function(req, res, next) {
	Book.findOne({ _id: req.params.id }, function(err, user) {
		if (err) throw err;
		console.log('read successifully!');
		res.json({userinfo: user});
	});
};
