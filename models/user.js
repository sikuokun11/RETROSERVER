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

user.findAllUser = function() {
    return user.findAll();
};
user.addUser = async user => {
    let sql = `INSERT INTO account(username,password) VALUES ('${user.username}','${user.password}')`;
    let res = await db.query(sql, {
        type: db.QueryTypes.INSERT
    });
    return res;
}
user.findUserById = async user => {
    let sql = `select * from account u where u.username = '${user.username}' AND u.password = '${user.password}';`;
    let res = await db.query(sql, {
        type: db.QueryTypes.SELECT
    });
    console.log('TEST' + res);
    if (res.length === 0) {
        return false;
    } else return true;

};
module.exports = user;