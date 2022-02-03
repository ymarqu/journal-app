const mongoose = require('mongoose');
const Journal = require('../models/journal')
const {journalEntries} = require('../Seeds/seedHelper');


const run = async() => {
    await mongoose.connect('mongodb://localhost:27017/journalsDB');
    console.log('DB Connection Successful');
}


run().catch(err => console.log(err));



const work = async() => {
   
    await Journal.deleteMany({});
    for(let journalEntry of journalEntries){
    const entry = new Journal({
        title: journalEntry.title,
        entry: journalEntry.entry,
        date: journalEntry.date
    });
    await entry.save();
    }
}

work().then(() => {
    mongoose.connection.close();
});

