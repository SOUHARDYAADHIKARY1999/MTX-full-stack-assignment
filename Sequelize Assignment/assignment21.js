var connection = require('./connection');

var Movie = connection.sequelize.define('Movie',{
    Id:{
        primaryKey:true,
        type:connection.Sequelize.INTEGER,
    },
    name:connection.Sequelize.STRING,
    genre:connection.Sequelize.STRING,
    },{
        timestamps:false,
        freezeTableName:true
    }
)

var actors = connection.sequelize.define('Actor',{
    actor_id:{
        primaryKey:true,
        type:connection.Sequelize.INTEGER
    },
    name:connection.Sequelize.STRING,
    id:{
        type:connection.Sequelize.INTEGER,
        references:{
            model:'Movie',
            key:"Id"
        }
    }
    },{
        timestamps:false,
        freezeTableName:true
    },
    
)

Movie.bulkCreate([
     {Id:1,name:'Avengers',location:'USA'},
     {Id:2,name:'Hulk',location:'USA'},
     {Id:3,name:'Rambo',location:'USA'},
     {Id:4,name:'Terminator',location:'USA'},

 ])
actors.bulkCreate([
     {actor_id:1,name:"Arnold",id:3},
     {actor_id:2,name:"Silvester",id:2},
     {actor_id:3,name:"Justin",id:2},
     {actor_id:4,name:"Elon",id:1},
    
])

Movie.belongsTo(actors,{as:"Movie"});
Movie.sync()
    .then(()=>{console.log("Movie table created");})
    .catch((err)=>{console.log(err);})

actors.sync()
    .then(()=>{console.log("Actor table created");})
    .catch((err)=>{console.log(err);})

actors.findAll({raw:true,include:['Movie']})
    .then(data=>{console.log(data)})
    .catch(err=>{console.log(err)})

connection.sequelize.query('select m.name,a.name from `Actor` a inner join `Movie` m on a.id=m.Id;',{type:connection.Sequelize.QueryTypes.SELECT})
.then((data)=>{console.log(data)})
.catch(err=>{console.log(err)})