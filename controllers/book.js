var Book = require('../models/book');

module.exports = (req, res, next)=>{
	// res.send('Thank you!');
	var _book = new Book({
		schedule: req.body.schedule,
		firstname: req.body.firstname,
		lastname: req.body.lastname
	});
	_book.save(function(err){
		if (err) throw err;
		console.log('person saved!');
	}).then(
		Person.find({}, function(err, users) {
			if (err) throw err;

			res.render('index', {userinfos: users});
		})
	);
}
