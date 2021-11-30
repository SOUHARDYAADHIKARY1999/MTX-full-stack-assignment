var connection  = require('./connection');
var Sequelize = require('sequelize')
connection.usersequelize.bulkCreate([
    {student_id:2,name:'souhardya',stream:'CSE',marks:100},
    {student_id:3,name:'robert',stream:'ECE',marks:90},
    {student_id:4,name:'john',stream:'EEE',marks:80},
    {student_id:5,name:'chen',stream:'ME',marks:70}]
    )
.then(data=>{
    console.log("Created Sucessfully")
})
.catch(err=>{
    console.log(err)
})


// connection.sequelize.query("Insert into `User` values(2,'praksh','cse',100)",{type:Sequelize.QueryTypes.INSERT})
// .then(data=>{console.log("Insterted Sucessfully")})
// .catch(err=>{console.log(err)})