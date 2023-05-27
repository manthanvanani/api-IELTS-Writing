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

module.exports = mongoose;