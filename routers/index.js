//import necessary package
var express = require('express'),
    router  = express.Router();
//the following are controllers
    index   = require('../controllers/index'),
    book  = require('../controllers/book'),
    
    create  = require('../controllers/create'),
    read    = require('../controllers/read'),
    readall = require('../controllers/readall'),
    update  = require('../controllers/update'),
    del     = require('../controllers/del'),


//RESTful
router.route('/').get(index);

router.route('/book')
  .post(create)
  .get(readall);
router.route('/book/:id')
  .get(read)
  .put(update)
  .delete(del);

//module exports
module.exports = router;
