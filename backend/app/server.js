const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const { port } = require('../config').config;

const routes = require('./routes');

const app = express();

app.use(morgan('dev'));

const corsOptions = {
  origin: 'https://your-site.com',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../../frontend/dist')));

app.use(routes);

app.listen(port || 3000, () => console.log(`listening to http://localhost:${port || 3000}/`));
