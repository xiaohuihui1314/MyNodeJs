import '../scss/index.scss';
let a = ["1", "2", "3", "4", "5"];
for (var value of a) {
    console.log(value);
}
var arry = [1, 2, 1, 3];
arry.forEach(function (value) {

});


{
    let rand =Math.random(),num =(rand*0x1000000<<0).toString(),sum=0,lucky;
    for(var i of num){
        sum =sum+~~i;
    }
    lucky= (sum%9)?1:0;
}
