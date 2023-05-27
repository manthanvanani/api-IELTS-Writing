var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var AcademicTrainingModel = new Schema({
    t_id: { type: String, required: true},
    que: { type: String, required: true },
    image_url: { type: String, required: false },
    ans: { type: String, required: false },
    created_date: { type: Date, default: Date.now },
}, { timestamps: true });
module.exports = mongoose.model('academic_training', AcademicTrainingModel);