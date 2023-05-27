
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var device_info = new Schema({
    status: { type: Number, required: true, default: 1 }, 
    device_id: { type: String, required: true},
    is_login: { type: Boolean, required: false , default: false },        
    createdDate: { type: Date, default: Date.now },
}, { timestamps: true });
module.exports = mongoose.model('device_info', device_info);