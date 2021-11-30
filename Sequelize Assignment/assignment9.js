var connection = require('./connection');

connection.employeesequelize.findAll({where:{dept:'IT'},raw:true})
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})

connection.sequelize.query("select * from `EmployeeTable` where dept='IT'",{type:connection.Sequelize.QueryTypes.SELECT})
.then(data=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})