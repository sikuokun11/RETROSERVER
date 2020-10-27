const Sequelize = require('sequelize');
const db = require('../configs/database');

const user = db.define('account', {
    user_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },

    firstname: {
        type: Sequelize.STRING,
        notEmpty: true
    },

    lastname: {
        type: Sequelize.STRING,
        notEmpty: true
    },

    username: {
        type: Sequelize.TEXT
    },

    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },

    address: {
        type: Sequelize.TEXT
    },

    password: {
        type: Sequelize.STRING
    },

    facebook_id: {
        type: Sequelize.STRING
    },

    facebook_token: {
        type: Sequelize.STRING,
        default: ''
    },

}, { timestamps: false, freezeTableName: true, });
module.exports = user;