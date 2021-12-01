var emp_data = [
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
    res.send(emp_data);
})

app.get('/getEmpById/:id',(req,res)=>{
    var id=req.params.id;
    var found_employee ={}
    emp_data.forEach(element=>{
        if(element.id=id)
            found_employee=element
    })
    res.send(found_employee);
})
app.get('/getEmpByName/:name',(req,res)=>{
    var name=req.params.name;
    var found_employee ={}
    emp_data.forEach(element=>{
        if(element.name=name)
            found_employee=element
    })
    res.send(found_employee);
})
app.post('/insertEmp',(req,res)=>{
    var obj = {
        id:req.body.id,
        name:req.body.name,
        dept:req.body.dept,
        designation:req.body.designation
    }
    emp_data.push(obj);
    res.send("Inserion sucessful");
})


app.put('/updateEmp/:id',(req,res)=>{
    var id=req.params.id;
    var index = -1;
    var result_str="";
    for(let i=0;i<emp_data.length;i++){
        if(emp_data[i].id==id){
            index=i;
            break;
        }
    }
    if(index==-1){
        result_str="No such employe exist here";
    }
    else{
        emp_data[index]=req.body;
        result_str="The employee data is updated successfully";
    }
    res.send(result_str);
})

app.delete('/deleteEmp/:id',(req,res)=>{
    var id=req.params.id;
    var index = -1;
    for(var i=0;i<emp_data.length;i++){
        if(emp_data[i].id==id){
            index=i;
            break;
        }
    }
    if(index==-1){
        res.send("No such employe exist here");
    }
    else{
        emp_data.splice(index,1);
        res.send("the employee data is deleted successfully");
    }
})
app.listen(8080,function(){
    console.log("Server is running at http://localhost:8080")
})