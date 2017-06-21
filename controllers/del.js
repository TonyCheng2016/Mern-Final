var Book = require('../models/book');

module.exports = function(req, res, next) {
	Book.findOneAndRemove({ _id: req.params.id }, function(err) {
		if (err) throw err;
		console.log('delete successifully!');
    Book.find({}, function(err, users) {
  		if (err) throw err;
				res.json({userinfos: users});
  	});
	});
};
