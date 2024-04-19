var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var UserInfoModel = new Schema(
  {
    status: { type: Number, required: true, default: 1 },
    name: { type: String, required: true },
    mobileNo: { type: String, required: false },
    email_id: { type: String, required: false },
    user_name: { type: String, required: true },
    password: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user_info", UserInfoModel);
