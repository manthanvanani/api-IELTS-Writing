var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var EssayQuestionModel = new Schema(
  {
    type_id: { type: Number, required: true },
    id: { type: Number, required: true },
    question: { type: String, required: false },
  },
  { timestamps: true }
);

EssayQuestionModel.virtual("types_data", {
  ref: "essay_types",
  localField: "type_id",
  foreignField: "id",
});

module.exports = mongoose.model("essay_questions", EssayQuestionModel);
