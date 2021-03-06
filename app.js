const express = require('express');
const mongoose = require('mongoose');
const engine = require('ejs-mate');
const methodOverride = require('method-override');
const Journal = require('./models/journal');
const Joi = require('joi');
const{journalSchema} = require('./joiValidateSchema');
const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/expressError');
const path = require('path');
const options = {month:'long', day: 'numeric', year:'numeric'}
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


const ValidateJournal = (req, res,next) => {
    
    const {error} = journalSchema.validate(req.body);
    if(error){
        const message = error.details.map(el => el.message).join(',');
        throw new ExpressError(message, 400);
    }else{
        next();
    }
}


app.get('/', (req,res) => {
    res.send('This is the home page')
});
app.get('/journals/new', (req,res) => {
    res.render('journals/new');
});
app.get('/journals', catchAsync(async (req,res) => {
    const allJournals = await Journal.find({});
    res.render('journals/index', {allJournals});
}));

app.get('/journals/:id', catchAsync(async(req,res) => {
    const {id} = req.params;
    const entry = await Journal.findById(id);
    res.render('journals/view', {entry});

}));

app.get('/journals/:id/edit', catchAsync(async(req,res) => { 
    const {id} = req.params;
    const editEntry = await Journal.findById(id);
    console.log(editEntry);
    res.render('journals/edit', {editEntry});
}));

app.post('/journals', ValidateJournal, catchAsync(async(req,res) => {
    
    console.log(result);
    let date = new Date().toLocaleString('UTC', options);
    const newJournalObj = req.body;
    newJournalObj.date = date;
    const newJournal = new Journal(newJournalObj);
    await newJournal.save();
    res.redirect('/journals');

}));

app.patch('/journals/:id',ValidateJournal, catchAsync(async(req,res) => {
    const {id} = req.params;
    await Journal.findByIdAndUpdate(id, req.body);
    res.redirect(`/journals/${id}`);
}));

app.delete('/journals/', catchAsync(async(req,res) => {
    const {id} = req.params;
    await Journal.findByIdAndDelete(id);
    res.redirect('/journals');
}));

app.all('*', (req,res,next) => {
    next(new ExpressError('Page not found', 404))
});
app.use((err,req,res,next) => {
    const {status = 500} = err;
    if(!err.message)err.message = 'Oops something went wrong!';
    res.status(status).render('error', {err});
});
app.listen(3000, () => {
    console.log('Listening on port 3000');
});