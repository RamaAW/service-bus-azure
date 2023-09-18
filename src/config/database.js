const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_crud', 'root', 'admin1234', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;

// const mysql = require('mysql2');

// const dbPool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     // waitForConnections: true,
//     // connectionLimit: 10,
//     // queueLimit: 0
// });

// module.exports = dbPool.promise();