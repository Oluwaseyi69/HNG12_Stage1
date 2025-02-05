const express = require('express');
const cors = require('cors');
const classifyRoute = require('./routes/Classification');

const app = express();
app.use(cors());
app.use('/api', classifyRoute);

module.exports = app;
