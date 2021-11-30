var emoloyeeSequelize = require('./connection')
var Sequelize = require('sequelize');

// emoloyeeSequelize.employeesequelize.create(
//     {EmpId:1200,name:'test',dept:'test',designation:'test'}
// )
// .then(data=>{console.log("record Inserted")})
// .catch(err=>{console.log(err)})



// emoloyeeSequelize.employeesequelize.findByPk(1200,{raw:true})
// .then(data=>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log(err);
// })


emoloyeeSequelize.sequelize.query('select * from `EmployeeTable` where EmpId=1200',{type:Sequelize.QueryTypes.SELECT})
.then(data=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})