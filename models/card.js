const Sequelize = require('sequelize');
const db = require('../configs/database');

const card = db.define('card', {
    card_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING,
        notEmpty: true
    },
    collum_id: {
        type: Sequelize.INTEGER,
        notEmpty: true
    },

}, { timestamps: false, freezeTableName: true, });
module.exports = card;