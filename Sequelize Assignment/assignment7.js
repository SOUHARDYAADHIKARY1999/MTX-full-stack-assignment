var connection = require('./connection');

connection.employeesequelize.findAll({where:{name:'Raja'},raw:true})
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})

connection.sequelize.query("select * from `EmployeeTable` where name='Raja'",{type:connection.Sequelize.QueryTypes.SELECT})
.then(data=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})