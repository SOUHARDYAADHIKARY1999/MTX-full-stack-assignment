var connection = require('./connection');

op=connection.Sequelize.Op

connection.employeesequelize.findAll({where:{
    name:{
    [op.like]:'%a%'
    }
},raw:true})
.then(data=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

connection.sequelize.query("select * from `EmployeeTable` where name like '%a%'",{type:connection.Sequelize.QueryTypes.SELECT})
.then(data=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})