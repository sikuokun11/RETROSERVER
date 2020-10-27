const express = require('express');
const router = express.Router();
const db = require('../configs/database');
const user = require('../models/user');
const board = require('../models/board');
const collum = require('../models/collum');
const card = require('../models/card');

const boardController = require('../controllers/board.controller');

router.get('/', boardController.searchAll);

module.exports = router;