const express = require('express');
const bodyParser = require('body-parser'); // for parsing the body of the request JSON
const cors = require('cors'); // for allowing cross-origin requests
const { init } = require('./dbconnect')
const BookModel = require('./models/book')

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

app.get('/books', async (req, res) => {
    const books = await BookModel.find();
    res.status(200).send(books);
});

app.post('/books', async (req, res) => {
   const book = req.body; 
   const newBook = await BookModel.create(book);
   res.status(201).send(newBook);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    init();
})