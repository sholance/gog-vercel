var express = require('express');
const hello = require('./api/hello');
const resource = require('./api/resource');

var app = express();

app.use(express.json());
app.set('view engine', 'ejs');

app.use("/", resource);
app.use("/hello", hello);

app.listen(3000, ()=>{
    console.log("Server is runningAA!");
});