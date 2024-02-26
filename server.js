var express = require("express");
// var logger = require('morgan');
var dotenv = require("dotenv");
dotenv.config();
var MONGODB_URL = `mongodb+srv://vanani:Vanani9442@cluster0.qvuuv.mongodb.net/`; // DB connection
var DeviceInfoModel = require("./Model/DeviceInfoModel");
var FCM = require("fcm-node");
var serverKey =
  "AAAA_mT_G0E:APA91bH5GEfButyt-GG8r2ZQS8o-3_w-B-oqwXmx49aC6k1H7k39aa4XSSV9pLRJwJOdBrVgoVBjwOzSb3-ZQ6pnEf84FJQCno0JqmWhuXGEwH1YnQ0hAEagyBh5JkDyahS37owtP9D_"; //put your server key here
var fcm = new FCM(serverKey);
var token = [
  "f8lMxIT2o0iCl13WaNWjV4:APA91bFi6r1DN-IxuXiXGwpKlO_IkC9b6vVsT98ceivirsjRJxRnkXJf25iQ3UBATVHqJ2fuivMz9WKWMltJWq5NJ-9iPgDKyDpr3fiDETDqXYvfdoDo3dnUsxCYiNLJNfd__dQJU5Nu",
];

var messages = [
  "“Believe you can and you’re halfway there.”",
  "“It always seems impossible until it’s done.”",
  "“Just because you fail once doesn’t mean you’re gonna fail at everything.”",
  "“It’s not what we do once in a while that shapes our lives. It’s what we do consistently.”",
  "“The only guarantee for failure is to stop trying”",
  "“Nothing great is ever achieved without much enduring.”",
  "“With ordinary talent and extraordinary perseverance, all things are attainable”",
  "“What you do today can improve all your tomorrows.”",
  "Aim for the moon. If you miss, you may hit a star.”",
  "“Don’t watch the clock. Do what it does. Keep going.”",
  "“It does not matter how slowly you go as long as you do not stop.”",
  "“In order to succeed, we must first believe that we can.”",
];

sendNotification();

var cron = require("node-cron");
cron.schedule("*/59 * * * *", () => {
  console.log("running a task every minute");
  sendNotification();
});

var mongoose = require("mongoose");
mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    if (process.env.NODE_ENV !== "final") {
      //don't show the log when it is test
      console.log("Connected to %s", MONGODB_URL);
      console.log("port:", process.env.PORT);
      console.log("App is running ... \n");
      console.log("Press CTRL + C to stop the process. \n");
    }
  })
  .catch((err) => {
    console.error("App starting error:", err.message), process.exit(1);
  });

var controller = require("./Controller/AcademicTraining.js");
var AcademicTrainingModel = require("./Model/AcademicTraining.js");
var router = require("./Router/Router.js");
var app = express();
// app.use(logger('dev'));
app.use(express.json());
app.use(express.static("Public"));

var bodyParser = require("body-parser");

// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/welcome", (req, res) => {
  res.json({
    status: true,
    message: "success.",
    data: "data",
    error: null,
  });
});

app.use("/api", router);

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
  console.log(`Hello world app listening on port ${process.env.PORT}!`);
});

module.exports = app;

async function sendNotification() {

  var data = await DeviceInfoModel.find({
    fcm_token: { $exists: true },
    $expr: { $gt: [{ $strLenCP: '$fcm_token' }, 40] }
  }).select('fcm_token');
  var token = data.flatMap((element) => { return element.fcm_token })
  data = new Set(data)
  console.log(data)

  var item = messages[Math.floor(Math.random() * messages.length)];
  var message = {
    //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    registration_ids: token,
    collapse_key: "IELTS Writing",

    notification: {
      title: "IELTS Writing",
      body: item,
    },

    data: {
      //you can send only notification or only data(or include both)
      my_key: "my value",
      my_another_key: "my another value",
    },
  };

  fcm.send(message, function (err, response) {
    if (err) {
      console.log("Something has gone wrong!");
    } else {
      console.log("Successfully sent with response: ", response);
    }
  });
}
