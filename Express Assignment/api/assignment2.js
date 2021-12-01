var employee_data = [
    {
        id:1001,
        name:"john",
        dept:"Sales",
        designation:"manager"
    },
    {
        id:1002,
        name:"bob",
        dept:"Finance",
        designation:"portfolio manager"
    },
    {
        id:1003,
        name:"tim",
        dept:"Management",
        designation:"Operation management"
    },
    {
        id:1004,
        name:"jinny",
        dept:"Engineering",
        designation:"Manufacturing Design"
    },
]
var express = require ("express");
var app = express();
app.use(express.json());

app.get('/getAllEmployeeData',(req,res)=>{
    res.send(employee_data);
})

app.listen(8080,function(){
    console.log("Server is running at http://localhost:8080")
})