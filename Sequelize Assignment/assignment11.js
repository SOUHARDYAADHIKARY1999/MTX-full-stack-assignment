var connection = require('./connection');

connection.employeesequelize.findAll({order:[['name','ASC']],raw:true})
.then(data=>{console.log(data)})
.catch(err=>{console.log(err)})

connection.sequelize.query("select * from `EmployeeTable` order by name asc ",{type:connection.Sequelize.QueryTypes.SELECT})
.then(data=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})