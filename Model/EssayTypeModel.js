var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var GeneralTrainingModel = new Schema(
  {
    type: { type: String, required: true },
    id: { type: Number, required: true },
    description: { type: String, required: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("essay_type", GeneralTrainingModel);
