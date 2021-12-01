var express = require ("express");
var app = express();
app.use(express.json());

app.post('/total_Salary',(req,res)=>{
    var hra=req.body.hra;
    var basic=req.body.basic;
    var da=req.body.da;
    var it=req.body.it;
    var pf=req.body.pf;

    res.send({'total_Salary':basic + hra + da - (it + pf)})
})
app.listen(8080,function(){
    console.log("Server is running at http://localhost:8080")
})