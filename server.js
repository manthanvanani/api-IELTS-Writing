var express = require('express');
var logger = require('morgan');
var dotenv = require("dotenv")
dotenv.config();

var database = require('./Database/Database.js');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


var routerAcademicTraining = require('./Router/AcademicTraining.js')

app.get('/welcome', (req, res) =>{
    res.send('HI 123')
})
app.get('/', routerAcademicTraining);

// catch 404 and forward to error handler
app.use('/',function(req, res) {
  res.send(404).json({
    path : 'Path Not Found',
  });
});


app.listen(process.env.PORT, () => console.log(`Hello world app listening on port ${process.env.PORT}!`))

module.exports = app;
