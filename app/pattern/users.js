var mongoose=require("mongoose")
    ,Schema=mongoose.Schema;
mongoose.connect('mongodb://localhost/user');
var User=new Schema({
    name:String,
    password:String,
    role:String,
    createTime:{
        type:Date,
        default:Date.now
    }
});
var messageList=new Schema({
    name:String,
    content:String,
    createTime:{
        type:Date,
        default:Date.now
    }
});
mongoose.model("User", User);
mongoose.model("MessageList", messageList);