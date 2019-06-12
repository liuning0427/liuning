var express = require('express');
var router = express.Router();
var User = require("../controler/user.js")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'haha' });
});
router.get("/reg",User.reg);
router.post("/reg",User.do_reg);

module.exports = router;
