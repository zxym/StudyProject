var http = require('http');
var mysql = require('mysql');
var url = require("url");
var express= require("express");
var app = express();
var path = require('path');
var router = express.Router();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

var str;
var indexRouter = require('./routes/index');

app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header("Content-Type", "application/json;charset=utf-8");
	res.header("Cache-Control","no-cache");
	next();
});

app.get('/',(req,res)=>{
	res.send(str);
})

app.use("/index",indexRouter);

app.listen(8080);
