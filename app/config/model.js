var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var BookSchema = new Schema({
    name:String,
    author:String,
    publishTime:Date
});
var UserSchema = new Schema({
    userName:String,
    passWord:String

});
mongoose.model("Book", BookSchema);
mongoose.model("User", UserSchema);
