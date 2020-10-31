const models_user = require('../models/user');



module.exports.searchAll = async(req, res) => {
    let allusers = await models_user.findAllUser();
    res.send(allusers);
};

module.exports.register = async(req, res) => {
    console.log(req.body);
    let addUser = await models_user.addUser(req.body);
    console.log("INSERT OK");
}

module.exports.login = async(req, res) => {
    console.log(req.body);
    let userLogin = await models_user.findUserById(req.body).then((response) => {
        res.send(response);
    });
    console.log("LOGIN OK");
}