var Sequelize = require('sequelize');
var db = require('./db.config')

const sequelize = new Sequelize(db.DB,db.user,db.password,{
    host:db.HOST,
    dialect:db.dialect,
    pool:{
        min:db.pool.min,
        max:db.pool.max,
        acquire:db.pool.acquire,
        idle:db.pool.idle
    }
})

let employeesequelize = sequelize.define('EmployeeTable',{
    EmpId:{
        primaryKey:true,
        type:Sequelize.STRING
    }, 
    name:Sequelize.STRING, 
    dept:Sequelize.STRING,
    designation:Sequelize.STRING
},{
    freezeTableName:true,
});

module.exports = {employeesequelize:employeesequelize,sequelize:sequelize}

/*
employeesequelize.sync()
.then(data=>{
    console.log("Table Created")
})
.catch(err=>{
    console.log(err)
})
*/

/*
employeesequelize.bulkCreate([
    {EmpId:1,name:'John',dept:'FullStack',designation:'trainee'},
    {EmpId:2,name:'Robert',dept:'FullStack',designation:'consultant'},
    {EmpId:3,name:'Charles',dept:'FullStack',designation:'manager'}
])
*/

// employeesequelize.findAll({raw:true})
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>{
//     console.log(err)
// })

sequelize.query('select * from `EmployeeTable`',{type:Sequelize.QueryTypes.SELECT})
.then(data=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})