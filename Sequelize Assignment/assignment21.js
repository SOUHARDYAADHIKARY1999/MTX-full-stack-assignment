var connection = require('./connection');

var Customer = connection.sequelize.define('Customer',{
    Id:{
        type:connection.Sequelize.INTEGER,
        primaryKey:true
    },
    name:connection.Sequelize.STRING,
    location:connection.Sequelize.STRING
    },{
        timestamps:false,
        freezeTableName:true
    })

var products = connection.sequelize.define('Product',{
    product_number:{
        primaryKey:true,
        type:connection.Sequelize.INTEGER
    },
    description:connection.Sequelize.STRING,
    cost:connection.Sequelize.INTEGER,
    id:{
        type:connection.Sequelize.INTEGER,
        references:{
            model:'Customer',
            key:"Id"
        }
    }
    },{
        timestamps:false,
        freezeTableName:true
    },
    
)

// Customer.bulkCreate([
//     {Id:1,name:'Test1',location:'India'},
//     {Id:2,name:'Test2',location:'India'},
//     {Id:3,name:'Test3',location:'India'},
//     {Id:4,name:'Test4',location:'India'},

// ])
// products.bulkCreate([
//     {product_number:1,description:"Test1",cose:212,id:3},
//     {product_number:2,description:"Test2",cose:2253,id:2},
//     {product_number:3,description:"Test3",cose:42,id:2},
//     {product_number:4,description:"Test4",cose:21422,id:1},
    
// ])

// Customer.belongsTo(products,{as:"Customer"});
// Customer.sync()
// .then(()=>{console.log("Customer table created");})
// .catch((err)=>{console.log(err);})

// products.sync()
// .then(()=>{console.log("Product table created");})
// .catch((err)=>{console.log(err);})

// products.findAll({raw:true,include:['Customer']})
// .then(data=>{console.log(data)})
// .catch(err=>{console.log(err)})

connection.sequelize.query('select c.name,p.description from `Product` p inner join `Customer` c on p.id=c.Id;',{type:connection.Sequelize.QueryTypes.SELECT})
.then((data)=>{console.log(data)})
.catch(err=>{console.log(err)})