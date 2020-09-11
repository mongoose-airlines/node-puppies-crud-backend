const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;

require('dotenv').config();
require('./config/database');

var puppiesRouter = require('./routes/api/puppies');

app.use(logger('dev'));
app.use(express.json());

app.use('/api/puppies', puppiesRouter);

app.listen(port, () => {
    console.log(`Express is listening on port ${port}.`)
});
