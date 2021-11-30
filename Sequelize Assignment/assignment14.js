var connection = require('./connection');
op=connection.Sequelize.Op
connection.usersequelize.findAll({where:{
    [op.and]:[{stream:'CSE'},{marks:{$eq:99}}]
}})
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err)
})