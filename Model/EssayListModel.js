var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var EssayListModel = new Schema({
    que: { type: String, required: true },
    ans: { type: String, required: false },
    created_date: { type: Date, default: Date.now },
}, { timestamps: true });
module.exports = mongoose.model('essay_list', EssayListModel);