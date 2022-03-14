const express = require("express");

const hello = express();

hello.get("/", (req, res) =>{
    return res.json({message: "Hello world!"});
});

module.exports = hello;