var connection = require('./connection');

connection.employeesequelize.destroy({where:{name:'test2'}})
.then(data=>{
    console.log('Deletion Sucessfull');
})
.catch(err=>{
    console.log(err)
})