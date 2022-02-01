const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
    title:String,
    journal:String,
    date:String
});

const Journal = mongoose.model('Journal', journalSchema)
module.exports = Journal;