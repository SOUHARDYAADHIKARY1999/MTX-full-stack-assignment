var Sequelize = require('sequelize');
var db = require('./db.config')

const sequelize = new Sequelize(db.DB,db.user,db.password,{
    dialect:db.dialect,
    host:db.HOST,
    pool:{
        max:db.pool.max,
        min:db.pool.min,
        acquire:db.pool.acquire,
        idle:db.pool.idle
    }
})

let moviesequelize = sequelize.define('MovieSequelize',{
    MovieId:{
        primaryKey:true,
        type:Sequelize.STRING
    }, 
    MovieName:Sequelize.STRING, 
    Type_of_Movie:Sequelize.STRING
},
    {
        timestamps:false,
        freezeTableName:true
    });

/*
moviesequelize.sync({force:true})
.then(data=>{
    console.log("Database created sucessfully")
})
.catch(err=>{
    console.log(err)
});
*/

/*
moviesequelize.bulkCreate([
    {MovieId:1,MovieName:'Babies Day Out',Type_of_Movie:"Adventure Drama"},
    {MovieId:3,MovieName:'Rambo',Type_of_Movie:"Action"},
    {MovieId:4,MovieName:'Terminator',Type_of_Movie:"Science Fiction"},
]);
*/


moviesequelize.findAll({raw:true})
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})

// sequelize.query('select * from `MovieSequelize`',{type:Sequelize.QueryTypes.SELECT})
// .then(data=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err)
// })