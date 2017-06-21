var mongoose = require('mongoose');
// mongoose.connect('mongodb://test:test@ds161190.mlab.com:61190/wk7dbtest');
mongoose.connect('mongodb://wk8test:wk8test@ds131432.mlab.com:31432/wk8dbtest');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  //schedule  : String,
  // Name: String,
  // Email: String,

  // firstname : String,
  // lastname  : String,
  // age       : Number,
  // occupation: String

  book_title: String,
  book_paragraph: String,
  book_content: String,
  // book_image:Buffer
});
module.exports = mongoose.model('Book', bookSchema);
