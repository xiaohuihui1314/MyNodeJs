var mongoose = require("mongoose");
require("./model.js");

var User = mongoose.model("User");
var cond = {
    // $and: [
    //     {author: "xiaohui"},
    //     // {author: "小辉辉"}
    //     {name:"AngularJs权威指南"}
    // ]
}
User.find(cond, function (err, docs) {
    if (err) {
        console.log("err", err);
        return;
    } else {
        console.log("cond", cond, "result", docs)
    }
    // if(docs){
    //     docs.remove();
    // }

});