var express = require ("express");
var app = express();
app.use(express.json());
/*app.get('/login',function(req,res){
    console.log("Logging at express side");

    res.send("This is the login method...");
})*/
app.post('/login',(req,res)=>{

    var uid= req.body.username;
    var password=req.body.password;
    errorRes="Invalid user";
    if(uid=='john' && password=='admin')
        errorRes="Valid user";
    res.send(errorRes)
});
app.listen(8080,function(){
    console.log("Server is running at http://localhost:8080")
})