const express = require('express');

const mongoose = require('mongoose');

const ejs = require('ejs');

const path = require('path');

const methodOverride = require('method-override');

const postController = require('./controller/postController');

const pageController = require('./controller/pageController');

const app = express();

// ejs
app.set('view engine', 'ejs');

// connection db
mongoose.connect('mongodb://localhost/cleanblog-test-db');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

// GET
app.get('/', postController.getAllPosts);

app.get('/posts/:id', postController.getPost);

app.get('/posts/edit/:id', pageController.getEditPage);

app.get('/about', pageController.getAboutPage);

app.get('/add_post', pageController.getAdd_PostPage);

// POST
app.post('/posts', postController.createPost);

// PUT
app.put('/posts/:id', postController.updatePost);

// DELETE
app.delete('/posts/:id', postController.deletePost);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda baslatildi`);
});
