#!/usr/bin/env node

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('morgan')('dev'));
app.use(require('./routes'))

app.listen(3000, function () {
 console.log("App listening on port 3000!");
});

