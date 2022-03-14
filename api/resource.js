const express = require("express");
const path = require("path");
const resource = express();

resource.set('views', path.join(__dirname, '../views'));

resource.get('/', (req, res)=> {
    return res.render('pages/index', {message: "ASGAHSG"});
});


module.exports = resource;