var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var app=express();

app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,'templates','index.htm'));

});
app.use(express.static(__dirname+"/public"))

app.get('/json/:userId',function(req,res){
    res.json({"messge":"Hello json"});
    console.log(req.params);
    console.log(req.query);
  });

app.use(bodyParser.urlencoded({extended: false}));
app.post('/name',function(req,res){
    var a=req.body;
    console.log(a.name);
res.send("works");
});

app.listen(3000,function(){console.log("listening on 3000");})