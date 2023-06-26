var express = require('express');
// var logger = require('morgan');
var dotenv = require("dotenv")
dotenv.config();
var MONGODB_URL = process.env.MONGODB_URL; // DB connection

var mongoose = require("mongoose");
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    if (process.env.NODE_ENV !== "final") { //don't show the log when it is test
        console.log("Connected to %s", MONGODB_URL);
        console.log("port:", process.env.PORT);
        console.log("App is running ... \n");
        console.log("Press CTRL + C to stop the process. \n");
    }
}).catch(err => { console.error("App starting error:", err.message), process.exit(1); });


var controller = require('./Controller/AcademicTraining.js')
var AcademicTrainingModel = require('./Model/AcademicTraining.js')
var router = require('./Router/Router.js')
var app = express();
// app.use(logger('dev'));
app.use(express.json());
app.use(express.static('Public'))


app.get('/welcome', (req, res) => {

    res.json({
        status: true,
        message: "success.",
        data: 'data',
        error: null
    });
})


app.use('/api', router)

// app.get('/api', async(req, res) => {
//     try {
//         var data = await AcademicTrainingModel.find()
//         console.log('AcademicTrainingModel', data.length);
//         return res.json({
//             status: true,
//             message: "success.",
//             data: data,
//             error: null
//         });
//     } catch (error) {
//         console.log('ERROR-----', error.message);
//         return res.json({
//             status: false,
//             message: error.message,
//             data: null,
//             error: error
//         });
//     }
// });

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