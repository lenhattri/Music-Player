var express =require('express');

var homeControllers = require('../controllers/home_controllers');

var router = express.Router();

router.use('/',homeControllers.index);


module.exports =router;

