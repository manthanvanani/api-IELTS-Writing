var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var EssayListModel = new Schema(
  {
    image_url: { type: String, required: true },
    open_url: { type: String, required: false },
    screen_id: { type: String, required: false },
    status: { type: Boolean, required: false, default: true },
    in_app: { type: Boolean, required: false, default: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("banners", EssayListModel);
