const express = require('express');
const router = express.Router();
const db = require('../configs/database');
const user = require('../models/user');
const board = require('../models/board');
const collum = require('../models/collum');
const card = require('../models/card');

const userController = require('../controllers/user.controller');

router.get('/', userController.searchAll);
router.post('/login', userController.login);
router.post('/register', userController.register);

module.exports = router;