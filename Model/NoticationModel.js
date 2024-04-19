var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var NoticationModel = new Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    sub_type: { type: String, required: false },
    description: { type: String, required: false },
    image: { type: String, required: false },
    id: { type: String, required: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Notications", NoticationModel);
