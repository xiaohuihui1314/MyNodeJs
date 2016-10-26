var express = require('express');
var mongoose = require("mongoose");
require("../config/model.js");
var Book = mongoose.model("Book");
var User = mongoose.model("User");
var router = express.Router();
var fs = require("fs");
var path = require('path');
var multipart = require('connect-multiparty');
// 把session保存到mongoDB中
// var cookieParser = require('cookie-parser');

router.use( function(req, res, next) {
    console.log(req.headers);
    console.log("headers-----------------"+req.headers.authorization);
    next();
});
router.get('/', function (req, res, next) {
    res.render('index')
});
router
    .get('/login', function (req, res, next) {
        res.render('login')
    })
    .get('/home', function (req, res, next) {
        res.render('home')
    })
    .post('/home', function (req, res, next) {
        var userName = req.body.userName;
        var passWord = req.body.userPwd;
        var cond = {
            $and: [
                {"userName": userName},
                {"passWord": passWord}
            ]
        };
        var token={};
        User.findOne(cond, function (err, docs) {
            console.log(docs)
            if (err) {
                console.log(err);
                return;
            }
            if (docs) {
                console.log(docs);
                req.session.state=true;

                token.state=true;
                token.name=userName;
                res.json({ token: token });
            }else {
                token.state=false;
                res.json({ token: token });
            }

        });


    })
    .get("/register", function (req, res, next) {
        res.render("register");
    })
    .post("/register", function (req, res, next) {

        var userName = req.body.userName;
        var passWord = req.body.userPwd;
        var user = new User({
            userName: userName,
            passWord: passWord
        });
        user.save(function (err) {
            if (err) return next(err);
            return res.json(user);
        });

    })


    .get("/jquery", function (req, res, next) {
        res.render("jQuery/jquery")

    })
    .get("/jQuery1", function (req, res, next) {
        res.render("jQuery/jQuery1")

    })
    .get("/video", function (req, res, next) {
        res.render("video/index")

    })
    .post("/server", function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header("Access-Control-Allow-Headers", "x-requested-with,content-type");
        console.log(req.body);
        return res.json(req.body);
    })
    .post("/jqueryupload", multipart(), function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,POST");
        res.header("Access-Control-Allow-Headers", "x-requested-with,content-type");
        //get filename
        var filename = req.files.files.originalFilename || path.basename(req.files.files.ws.path);
        //copy file to a public directory
        var targetPath = "public/images/" + filename;
        //copy file
        console.log(targetPath);
        fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(targetPath));
        res.json({code: 200, msg: {url: "/images/" + filename}});
    })
    .post("/upload", multipart(), function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header("Access-Control-Allow-Headers", "x-requested-with,content-type");
        console.log("进来了！");
        console.log(req.files);
        var filename = req.files.imageFile.name;
        console.log(filename);
        var targetPath = "public/images/" + filename;
        //copy file
        console.log(targetPath)
        fs.createReadStream(req.files.imageFile.path).pipe(fs.createWriteStream(targetPath));
        res.json({code: 200, msg: {url: "/images/" + filename}});
    })
    .post("/uploads", multipart(), function (req, res, next) {
        console.log("进来了！")
        console.log(req.files);
        res.json({code: 200});
    })
    // 主页
    .get("/angular", function (req, res, next) {
        res.render("angular/index");
    })
    .get("/test",function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header("Access-Control-Allow-Headers", "x-requested-with,content-type");
        res.json({code:"这是get请求！",data:req.body});
    })
    .post("/test",function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header("Access-Control-Allow-Headers", "x-requested-with,content-type");
        res.json({code:"这是post请求！",data:req.body});
    });


module.exports = router;
