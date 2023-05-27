var express = require('express');
var logger = require('morgan');
var dotenv = require("dotenv")
dotenv.config();

var database = require('./Database/Database.js');
var controller = require('./Controller/AcademicTraining.js')
var AcademicTrainingModel = require('./Model/AcademicTraining.js')
var app = express();
app.use(logger('dev'));
app.use(express.json());


app.get('/welcome', (req, res) => {

    res.sendStatus(200).json({
        status: true,
        message: "success.",
        data: 'data',
        error: null
    });
})

app.get('/1', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    res.sendStatus(200).json({
        status: true,
        message: "success.",
        data: 'data',
        error: null
    });
})
app.get('/api', async(req, res) => {
    // try {
    var data = await AcademicTrainingModel.find()
    console.log('AcademicTrainingModel', data.length);
    return res.sendStatus(200).json({
        status: true,
        message: "success.",
        data: data,
        error: null
    });
    // } catch (error) {
    //     console.log('ERROR-----', error.message);
    //     return res.sendStatus(200).json({
    //         status: false,
    //         message: error.message,
    //         data: null,
    //         error: error
    //     });
    // }
});

// catch 404 and forward to error handler
// app.use('/', function(req, res) {
//     res.send(404).json({
//         path: 'Path Not Found',
//     });
// });


app.listen(process.env.PORT, (req, res) => {
    console.log(`Hello world app listening on port ${process.env.PORT}!`)
})

module.exports = app;