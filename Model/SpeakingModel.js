var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var GeneralTrainingModel = new Schema({
    que: { type: String, required: true },
    que_point: { type: String, required: false },
    ans: { type: String, required: false },
    follow_que_ans: { type: String, required: false },
    created_date: { type: Date, default: Date.now },
}, { timestamps: true });
module.exports = mongoose.model('speaking', GeneralTrainingModel);