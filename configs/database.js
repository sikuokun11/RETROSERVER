const Sequelize = require('sequelize');

module.exports = new Sequelize('db7hvqs99lfjf7', 'zhzpczjxjusovy', 'd3f71536a301a6098c28cc681a05bd1f23072c7e8569dbb08048d41ce3827729', {
    host: 'ec2-54-82-208-124.compute-1.amazonaws.com',
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
        "ssl": { "require": true, rejectUnauthorized: false }
    },
    pool: {
        max: 15,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});