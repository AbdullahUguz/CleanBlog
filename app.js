const express = require('express');
const path=require('path');
const ejs = require('ejs');

const app = express();

// ejs
app.set("view engine","ejs");

// middleware
app.use(express.static('public'));

// router
app.get('/', (req, res) => {

  res.render('index');
});

app.get('/about', (req, res) => {

  res.render('about');
});

app.get('/add_post', (req, res) => {

  res.render('add_post');
});
app.get('/post', (req, res) => {

  res.render('post');
});



const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda baslatildi`);
});
