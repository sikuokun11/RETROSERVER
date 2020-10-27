const Sequelize = require('sequelize');
const db = require('../configs/database');

const collum = db.define('collum', {
    collum_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING,
        notEmpty: true
    },
    board_id: {
        type: Sequelize.INTEGER,
        notEmpty: true
    },

}, { timestamps: false, freezeTableName: true, });
module.exports = collum;