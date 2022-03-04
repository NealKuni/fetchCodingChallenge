const mongoose = require('mongoose');


const UserPointsSchema = new mongoose.Schema({
    payer: { type: String },
    points: { type: Number },
}, { timestamps: true });
module.exports = mongoose.model('Points', UserPointsSchema);

