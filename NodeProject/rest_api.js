const express = require('express');
const mongoose = require('mongoose');
const book = require('./model');
const { ObjectId } = require('bson');
require('dotenv').config();

const connectionString = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@mongodb-wt.rmne2.mongodb.net/btech_cse_116`;

mongoose.connect(connectionString).then(() => {
  console.log("Connected!");
  const app = express();

  app.use(express.json()); // Handles JSON request bodies

  // GET all books
  app.get('/books', async (req, res) => {
    try {
      const ans = await book.find();
      res.send(ans);
    } catch (err) {
      res.status(500).send({ error: "Failed to fetch books", details: err.message });
    }
  });

  // GET a book by ID
  app.get('/books/:id', async (req, res) => {
    try {
      const ans = await book.findOne({ _id: new ObjectId(req.params.id) });
      if (!ans) return res.status(404).send({ error: "Book not found" });
      res.send(ans);
    } catch (err) {
      res.status(400).send({ error: "Invalid ID or error fetching book", details: err.message });
    }
  });

  // POST (add) a new book
  app.post('/books', async (req, res) => {
    try {
      const b = new book({ ...req.body });
      await b.save();
      const allBooks = await book.find();
      res.status(201).send(allBooks);
    } catch (err) {
      res.status(400).send({ error: "Failed to add book", details: err.message });
    }
  });

  // DELETE a book by ID
  app.delete('/books/:id', async (req, res) => {
    try {
      const result = await book.deleteOne({ _id: new ObjectId(req.params.id) });
      if (result.deletedCount === 0) {
        return res.status(404).send({ error: "Book not found or already deleted" });
      }
      res.send({ message: "Book deleted successfully" });
    } catch (err) {
      res.status(400).send({ error: "Invalid ID or error deleting book", details: err.message });
    }
  });

  // PUT (update) a book by ID
  app.put('/books/:id', async (req, res) => {
    try {
      const b = await book.findOne({ _id: new ObjectId(req.params.id) });
      if (!b) {
        return res.status(404).send({ error: "Book not found" });
      }

      // Update fields
      b.title = req.body.title;
      b.author = req.body.author;
      b.price = req.body.price;
      b.publishedDate = req.body.publishedDate;

      const updated = await b.save();
      res.send(updated);
    } catch (err) {
      res.status(400).send({ error: "Invalid data or ID", details: err.message });
    }
  });

  // Start the server
  app.listen(process.env.PORT, () => {
    console.log("Server running @ " + process.env.PORT);
  });
}).catch(err => {
  console.error("Failed to connect to MongoDB:", err.message);
});