var express = require('express');
var router = express.Router();
var User = require("../controllers/user.js")

/* GET home page. */
router.get('/', User.index);
router.get("/reg",User.reg);  //从服务器获取/reg
router.post("/reg",User.do_reg);  //向服务器发送信息

router.get('/login',User.login);
router.post('/login',)

module.exports = router;
