var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var WebsitesModel = new Schema(
  {
    status: { type: Boolean, required: true, default: true },
    url: { type: String, required: false },
    description: { type: String, required: false },
    ogImage: { type: String, required: false },
    ogTitle: { type: String, required: false },
    site_name: { type: String, required: false },
    title: { type: String, required: false },
    type: { type: String, required: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("websites", WebsitesModel);
