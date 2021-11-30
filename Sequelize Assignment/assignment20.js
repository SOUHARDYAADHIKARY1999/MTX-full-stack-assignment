var connection = require('./connection');

connection.employeesequelize.drop()
.then(()=>{console.log("table deleted sucessfully");})
.catch(err=>{console.log(err)})