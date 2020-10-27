const Sequelize = require('sequelize');
const db = require('../configs/database');
const sequelize = require('sequelize');

const board = db.define('board', {
    board_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING,
        notEmpty: true
    },
    createdate: {
        type: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    },
    url: {
        type: Sequelize.STRING,
        notEmpty: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        notEmpty: true
    },

}, { timestamps: false, freezeTableName: true, });

board.findBoardByUserId = function(id) {
    return board.findAll({ where: { user_id: id } });
};
board.findDetailBoardByUserId = async function(id) {
    let sql = `select b.board_id,b.name,b.createdate,(select count(*) from collum col where col.board_id = b.board_id) as numCards from board b left join account u on b.user_id = u.user_id where u.user_id = ${id};`;
    let res = await db.query(sql, {
        type: db.QueryTypes.SELECT
    });
    return res;
};
module.exports = board;