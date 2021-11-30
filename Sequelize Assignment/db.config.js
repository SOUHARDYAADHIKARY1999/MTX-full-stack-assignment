module.exports = {
    HOST:"localhost",
    DB:'Assignment',
    user:'root',
    password:'mysqlroot',
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        acquire:50000,
        idle:10000
    }
}