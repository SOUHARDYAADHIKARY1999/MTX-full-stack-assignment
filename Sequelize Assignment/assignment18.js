var connection = require('./connection');

connection.employeesequelize.update({name:'SOUHARDYA ADHIKARY'},{
    where:{name:'Souhardya'}
})
.then(data=>{
    console.log("Update Sucessfull")
})
.catch(err=>{
    console.log(err);
})