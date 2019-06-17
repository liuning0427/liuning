var express = require('express');
var router = express.Router();
var User = require('../contorllors/user.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/reg',User.reg);
router.post('/reg',User.do_reg);

router.get('/login',User.login);
router.post('/login',User.do_login);

router.get('/index',User.index);

router.post('/checkname',User.checkname);

module.exports = router;
