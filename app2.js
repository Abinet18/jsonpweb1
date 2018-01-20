const express=require('express');
const ejs=require('ejs');


var app=express();

app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

app.set("jsonp callback", true);


app.get('/getData',(req,res,next)=>{
    var message={"message":"hello"};
    console.log(message);
    res.jsonp(message);
})

app.listen(9000);
