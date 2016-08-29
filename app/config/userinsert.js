/**
 * Created by LYH on 2016/6/8.
 */
var mongoose =require("mongoose");
require("./model.js");
var User=mongoose.model("User");
var user =new User({
    userName:"小辉辉",
    passWord:"123456"

});

user.save(function (err) {
    console.log("save status",err?"failed":"success");
});