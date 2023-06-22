const express = require('express');
const mainrouter = express.Router();
const { 
    homeController,
    mapController,
    mapController2,
    reportController
 } = require('../controllers/main');

mainrouter.get('/', homeController);

mainrouter.get('/map', mapController);

mainrouter.get('/map2', mapController2);

mainrouter.get('/report', reportController);




module.exports = { mainrouter };