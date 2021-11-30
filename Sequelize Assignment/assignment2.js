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

let usersequelize = sequelize.define('UserSequelize',{
    student_id:Sequelize.STRING, 
    name:Sequelize.STRING, 
    stream:Sequelize.STRING,
    marks:Sequelize.INTEGER
},{
    freezeTableName:true,
});

// sequelize.query('create table `User` (student_id int,name varchar(25),stream varchar(25),marks int)',{type:Sequelize.QueryTypes.RAW})

usersequelize.sync({force:true})
.then(data=>{
    console.log("Table created sucessfully")
})
.catch(err=>{console.log(err)})