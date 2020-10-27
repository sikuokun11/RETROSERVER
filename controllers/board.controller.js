const models_board = require('../models/board');

module.exports.searchAll = async(req, res) => {
    let allboards = await models_board.findDetailBoardByUserId(1);
    res.send(allboards);
};