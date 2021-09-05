const express = require('express');

const indexRouter = require('../routes/index');
const quotesRouter = require('../routes/postings');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/postings', quotesRouter);

module.exports = app;

app.listen(5000);
