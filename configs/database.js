const Sequelize = require('sequelize');

module.exports = new Sequelize('sprintretroapp', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    //ssl: true,
    // dialectOptions: {
    //     "ssl": { "require": true, rejectUnauthorized: false }
    // },
    pool: {
        max: 15,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});