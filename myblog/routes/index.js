var express = require('express');
var router = express.Router();
var User = require('../contorllers/user.js');
var Blog=require("../contorllers/blog.js")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

function checkLogin(req,res,next){
  if(req.session){
    next();
  }else{
    res.redirect('/');
  }
}

router.get('/index',checkLogin);
router.get('/',function(req,res,next){
  res.render('../views/index1.ejs')
})

router.get('/unlogin',User.unlogin);

router.get('/reg',User.reg);
router.post('/reg',User.do_reg);

router.get('/login',User.login);
router.post('/login',User.do_login);

router.get('/index',Blog.index);

router.post('/checkname',User.checkname);

router.get('/newblog',Blog.newblog);
router.post('/newblog',Blog.do_newblog);

router.get('/catalog',Blog.catalog);
router.post('/catalog',Blog.do_catalog);

module.exports = router;
