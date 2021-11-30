var connection = require('./connection');

connection.employeesequelize.findAll({attributes:['name','dept'],raw:true})
.then(data=>[
    console.log(data)
])
.catch(err=>{
    console.log(err)
})

connection.sequelize.query("select name,dept from `EmployeeTable`",{type:connection.Sequelize.QueryTypes.SELECT})
.then(data=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})