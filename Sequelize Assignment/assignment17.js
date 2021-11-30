var connection = require('./connection');

connection.employeesequelize.bulkCreate([
    {EmpId:1,name:'Souhardya',dept:'FullStack',designation:'trainee'},
    {EmpId:2,name:'Bunny',dept:'Salesforce',designation:'consultant'},
    {EmpId:3,name:'Tom',dept:'Quality Analysis',designation:'manager'}
])