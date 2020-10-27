const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//db test 
const db = require('./configs/database');
//db.authenticate().then(() => console.log('Database connected .....')).catch(err => console.log(err));

var cors = require('cors')

app.use(cors());

app.use('/users', require('./routes/userroute'));
app.use('/boards', require('./routes/board.router'));

// Config cho req.body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listen on port ${PORT}!`));