const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
    title:String,
    entry:String,
    date:String
});

const Journal = mongoose.model('Journal', journalSchema)
module.exports = Journal;