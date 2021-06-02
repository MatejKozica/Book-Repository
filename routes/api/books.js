const express = require('express');
const router = express.Router();

//Book Model
const Book = require('../../models/Book')

//@route GET api/books
//@desc Get all books
//@access Public
router.get('/', (req, res) => {
  Book.find()
    .sort({ date: -1 }) 
    .then(books => res.json(books))
})

//@route GET api/books
//@desc Get specific book by id
//@access Public
router.get('/:id', (req, res) => {
  Book.findById(req.params.id)
  .then(book => res.json(book))
  .catch(err => res.status(404).json({msg:"Book with that id does not exist, sorry."}));
})

//@route POST api/books
//@desc Create a book
//@access Public
router.post('/', (req, res) => {
  console.log(req.body);

  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    genre: req.body.genre,
    lengthWords: req.body.lengthWords,
    lengthPages: req.body.lengthPages,
    imgSrc: req.body.imgSrc,
    series: req.body.series,
  });

  newBook.save().then(book => res.json(book));
});

//@route DELETE api/books
//@desc Delete a book
//@access Public
router.delete('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => book.remove()
    .then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;