/**
 * Created by LYH on 2016/6/6.
 */
var mongoose =require("mongoose");
require("./model.js");
var Book=mongoose.model("Book");
var book =new Book({
    name:"AngularJs权威指南",
    author:"xiaohui",
    publishTime:new Date()
});

book.save(function (err) {
    console.log("save status",err?"failed":"success");
});