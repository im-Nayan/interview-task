const express = require('express');
const controller = require('../controller/index_controller')
const route = express.Router()


//GET METHODS
route.get('/',controller.index) 

// EXPORTS SECTION
module.exports=route