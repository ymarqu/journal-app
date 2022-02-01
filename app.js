const express = require('express');
const mongoose = require('mongoose');
const engine = require('ejs-mate');
const methodOverride = require('method-override');
const Journal = require('./models/journal')
const path = require('path');
const app = express();


const run = async() => {
    mongoose.connect('mongodb://localhost:27017/journalsDB');
    console.log('DB Connection Successful');
}

run().catch(err => console.log(err));

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.get('/', (req,res) => {
    res.send('This is the home page')
});
app.get('/journals/new', (req,res) => {
    res.render('journals/new');
});
app.get('/journals', async (req,res) => {
    const allJournals = await Journal.find({});
    res.render('journals/index', {allJournals});
});
app.get('/journals/:id', async(req,res) => {
    const {id} = req.params;
    const entry = await Journal.findById(id);
    res.render('journals/view', {entry});

});
app.get('/journals/:id/edit', async(req,res) => { 
    const {id} = req.params;
    const editEntry = await Journal.findById(id);
    console.log(editEntry);
    res.render('journals/edit', {editEntry});
});
app.post('/journals', async(req,res) => {
    const newJournalObj = req.body;
    newJournalObj.date = 'July 20, 2017';
    const newJournal = new Journal(newJournalObj);
    await newJournal.save();
    res.redirect('/journals');

});

app.patch('/journals/:id', async (req,res) => {
    const {id} = req.params;
    await Journal.findByIdAndUpdate(id, req.body);
    res.redirect(`/journals/${id}`);
});
app.delete('/journals/', async (req,res) => {
    const {id} = req.params;
    await Journal.findByIdAndDelete(id);
    res.redirect('/journals');
});
app.use((req,res) => {
    res.status(404).send('Not Found');
});
app.listen(3000, () => {
    console.log('Listening on port 3000');
});