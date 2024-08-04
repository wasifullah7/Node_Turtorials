const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')


//express app
const app = express();

const DbUrl = 'mongodb+srv://wasifwwez:Admin%40123%21@cluster0.a25enil.mongodb.net/mydatabase?retryWrites=true&w=majority';
mongoose.connect(DbUrl)
.then((result)=>{
     app.listen(3000);
    console.log('database is connected')})
.catch((err)=> {console.log(err)})

//middleware & Static files and logger
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

//register view engine
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.redirect('blogs')
})

app.get('/about', (req,  res)=>{
    res.render('about', {title: 'About'});
 });

app.use('/blogs', blogRoutes)

// 404 page
app.use((req,res)=>{
    res.render('404', {title: '404'})
})